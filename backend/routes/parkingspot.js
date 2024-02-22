const express = require('express');
const router = express.Router();
const pool = require('../pool');
const DatabaseService = require("../database-service");

router.get('/', async (req, res) => {
    DatabaseService.executeSelectionQuery({ text: 'SELECT * FROM ParkingSpot', values: [] })
        .then(results => res.status(200).json(results))
        .catch(e => {
            if (e.message === "Nothing found") res.status(404).json({ error: e.message })
            else res.status(500).json({ error: "Error while fetching parking spots: " + e.message })
        });
});

router.get('/:stationId', async (req, res) => {
    const stationId = req.params.stationId;

    DatabaseService.executeSelectionQuery({ text: 'SELECT ps.spot_id, ps.station_id, ps.spot_number, ARRAY_AGG(bc.category_id) AS categories FROM ParkingSpot ps LEFT JOIN ParkingSpotCategory psc ON ps.spot_id = psc.spot_id LEFT JOIN BikeCategory bc ON psc.category_id = bc.category_id WHERE ps.station_id = $1 GROUP BY ps.spot_id', values: [stationId] })
        .then(results => res.status(200).json(results))
        .catch(e => {
            if (e.message === "Nothing found") res.status(404).json({ error: e.message })
            else res.status(500).json({ error: "Error while fetching parking spots: " + e.message })
        });
});

router.get('/spot/:spotId', async (req, res) => {
    const { spotId } = req.params;

    DatabaseService.executeSelectionQuery({ text: 'SELECT * FROM ParkingSpot WHERE spot_id = $1', values: [spotId] })
        .then(results => res.status(200).json(results))
        .catch(e => {
            if (e.message === "Nothing found") res.status(404).json({ error: e.message })
            else res.status(500).json({ error: "Error while fetching bike: " + e.message })
        });
});

router.get('/spot/:spotId/assigned-bikes', async (req, res) => {
    const { spotId } = req.params;

    DatabaseService.executeSelectionQuery({ text: 'SELECT * FROM Bike WHERE assigned_to = $1', values: [spotId] })
        .then(results => res.status(200).json(results))
        .catch(e => {
            if (e.message === "Nothing found") res.status(404).json({ error: e.message })
            else res.status(500).json({ error: "Error while fetching bike: " + e.message })
        });
});

// TODO COMMIT?
router.post('/spot', async (req, res) => {
    // Hint categoryIds is an array, since multiple categories can be held in one spot
    const { stationId, spotNumber, categoryIds } = req.body;

    if (!stationId || !spotNumber || !categoryIds) return res.status(500).json({ error: "Not all required data inserted" });

    pool.query('INSERT INTO parkingspot (station_id, spot_number) VALUES ($1, $2) RETURNING *', [stationId, spotNumber])
        .then(spotResult => {
            const spotId = spotResult.rows[0].spot_id;
            console.log(spotId)
            const categoryPromises = categoryIds.map(categoryId => pool.query('INSERT INTO parkingspotcategory (spot_id, category_id) VALUES ($1, $2)', [spotId, categoryId]));

            return Promise.all(categoryPromises).then(() => spotResult.rows[0]);
        })
        .then(spotRow => res.status(200).json({ success: true, rowsChanged: spotRow }))
        .catch(e => {
            res.status(500).json({ error: "Error while adding spot: " + e.message })
        });
});

// Nur categoryIds können geupdatet werden
router.put('/spot/:spotId', async (req, res) => {
    const { spotId } = req.params;
    const { newCategoryIds } = req.body;

    if (!newCategoryIds) {
        return res.status(400).json({ error: "Not all required data inserted" });
    }

    pool.query('SELECT category_id FROM parkingspotcategory WHERE spot_id = $1', [spotId])
        .then(result => {
            const existingCategoryIds = result.rows.map(row => row.category_id);

            const categoriesToAdd = newCategoryIds.filter(id => !existingCategoryIds.includes(id));
            const categoriesToRemove = existingCategoryIds.filter(id => !newCategoryIds.includes(id));

            const addPromises = categoriesToAdd.length > 0 
                                ? categoriesToAdd.map(categoryId => pool.query('INSERT INTO parkingspotcategory (spot_id, category_id) VALUES($1, $2)', [spotId, categoryId]))
                                : [Promise.resolve()];
            const removePromises = categoriesToRemove.map(categoryId => pool.query('DELETE FROM parkingspotcategory WHERE spot_id = $1 AND category_id = $2', [spotId, categoryId]));

            return Promise.all([...addPromises, ...removePromises]);
        })
        .then(() => res.status(200).json({ success: true }))
        .catch(e => res.status(500).json({ error: "Error while updating parking spot categories: " + e.message }));
});


router.delete('/spot/:spotId/:bikeId', async (req, res) => {
    const { spotId, bikeId } = req.params;

    DatabaseService.executeUpdateQuery({ text: 'UPDATE Bike set assigned_to = NULL, station_id = NULL WHERE bike_id = $1', values: [bikeId] })
        .then(result => {
            DatabaseService.executeDeleteQuery({ text: 'DELETE FROM parkingspotcategory WHERE spot_id = $1', values: [spotId] })
                .then(result => {
                    DatabaseService.executeDeleteQuery({ text: 'DELETE FROM parkingspot WHERE spot_id = $1', values: [spotId] })
                        .then(result => res.status(200).json({ success: true, rowsChanged: result }))
                        .catch(e => res.status(500).json({ error: "Error while deleting parking spot: " + e.message }))
                })
                .catch(e => res.status(500).json({ error: "Error while deleting parking spot category: " + e.message }))
        })
        .catch(e => res.status(500).json({ error: "Error while unassigning bike from parking spot category: " + e.message }))
});

router.delete('/spot/:spotId', async (req, res) => {
    const { spotId } = req.params;

    DatabaseService.executeDeleteQuery({ text: 'DELETE FROM parkingspot WHERE spot_id = $1', values: [spotId] })
    .then(result => res.status(200).json({ success: true, rowsChanged: result }))
    .catch(e => res.status(500).json({ error: "Error while deleting parking spot: " + e.message }))

});

module.exports = router;
