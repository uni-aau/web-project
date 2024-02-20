const express = require('express');
const router = express.Router();
const pool = require('../pool');
const DatabaseService = require('../database-service')

router.get('/', function (eq, res) {
    DatabaseService.executeSelectionQuery({
        text: 'SELECT b.*, m.model_name, c.category_name, c.category_id, s.station_name FROM Bike b LEFT JOIN Station s ON b.station_id = s.station_id JOIN BikeModel m ON b.model_id = m.model_id JOIN BikeCategory c ON m.category_id = c.category_id',
        values: []
    })
        .then(results => res.status(200).json(results))
        .catch(e => {
            if (e.message === "Nothing found") res.status(404).json({error: e.message})
            else res.status(500).json({error: "Error while fetching bikes: " + e.message})
        });
});

router.get('/bike/:bikeId', function (req, res) {
    const {bikeId} = req.params;

    DatabaseService.executeSelectionQuery({text: 'SELECT * FROM Bike WHERE bike_id = $1', values: [bikeId]})
        .then(results => res.status(200).json(results))
        .catch(e => {
            if (e.message === "Nothing found") res.status(404).json({error: e.message})
            else res.status(500).json({error: "Error while fetching bike: " + e.message})
        });
});

// For creating/updating new bike with update button
router.post('/bike', function (req, res) {
    const {stationId, bikeName, modelId, status, size, price, bike_image_location} = req.body;

    if (!stationId || !bikeName || !modelId || !status || !size) return res.status(500).json({error: "Not all required data inserted"});

    let query = {
        text: 'INSERT INTO BIKE (station_id, bike_name, model_id, status, size, price, bike_image_location) VALUES($1, $2, $3, $4, $5, $6, $7)',
        values: [stationId, bikeName, modelId, status, size, price, bike_image_location]
    }

    DatabaseService.executeInsertionQuery(query)
        .then(result => res.status(200).json({success: true, rowsChanged: result}))
        .catch(e => res.status(500).json({error: "Error while adding bike: " + e.message}))
});

router.put('/bike/:bikeId', function (req, res) {
    const {bikeId} = req.params;
    const {stationId, bikeName, modelId, status, size, price, bike_image_location} = req.body;

    if (!stationId || !bikeName || !modelId || !status || !size) return res.status(500).json({error: "Not all required data inserted"});

    let query = {
        text: 'UPDATE BIKE SET station_id = $1, bike_name = $2, model_id = $3, status = $4, size = $5, price = $6, bike_image_location = $7 WHERE bike_id = $8',
        values: [stationId, bikeName, modelId, status, size, price, bike_image_location, bikeId]
    }

    DatabaseService.executeUpdateQuery(query)
        .then(result => res.status(200).json({success: true, rowsChanged: result}))
        .catch(e => res.status(500).json({error: "Error while updating bike: " + e.message}))
});

router.get('/bike/:bikeId/type', function (req, res) {
    const {bikeId} = req.params;

    // Retrieves bike model and bike category of specific bike
    let query = {
        text: 'SELECT bm.model_name, bc.category_name FROM bike b, bikemodel bm, bikecategory bc WHERE b.bike_id = $1 AND b.model_id = bm.model_id AND bm.category_id = bc.category_id',
        values: [bikeId]
    }

    DatabaseService.executeSelectionQuery(query)
        .then(results => res.status(200).json(results))
        .catch(e => {
            if (e.message === "Nothing found") res.status(404).json({error: e.message})
            else res.status(500).json({error: "Error while fetching bike types: " + e.message})
        });
});

router.get('/bike/:bikeId/status', function (req, res) {
    const {bikeId} = req.params;
    const {bikeStatus} = req.body;

    if (!bikeId || !bikeStatus) return res.status(500).json({error: "Not all required data inserted"});

    // Retrieves bike model and bike category of specific bike
    let query = {
        text: 'UPDATE bike SET status = $1 WHERE bike_id = $2',
        values: [bikeStatus, bikeId]
    }

    DatabaseService.executeUpdateQuery(query)
        .then(result => res.status(200).json({success: true, rowsChanged: result}))
        .catch(e => res.status(500).json({error: "Error while updating bike: " + e.message}));
});

// router.put('/bike/:bikeId/assign', function (req, res) {
//     const {bikeId} = req.params;
//     const {stationId} = req.body;

//     if (!stationId) return res.status(500).json({error: "Not all required data inserted"});

//     // Check, ob bike mit BikeId hat Platz auf dieser StationId (TODO)
//     // Bike hat bestimmtes Model, das Modell ist wiederum in einer bestimmten Kategorie und die Kategorie ist wiederum möglicherweise zu
//     // einem bestimmten ParkingSpot (ParkingSpotCategory) assigned,
//     // welche wiederum einem ParkingSpot gehört und dieser ParkingSpot gehört einer Station
//     let query = {
//         text: '',
//         values: []
//     }

//     DatabaseService.executeSelectionQuery(query)
//         .then(result => {
//             let query = {
//                 // TODO
//                 text: 'UPDATE bike SET station_id = $1, assigned_to = $2 WHERE bike_id = $3',
//                 values: []
//             }
//         })
//         .catch(e => res.status(500).json({error: "Error while updating bike: " + e.message}))
// });

router.put('/bike/:bikeId/assign-spot', function (req, res) {
    const {bikeId} = req.params;
    const {stationId, spotNumber} = req.body;

    if (!stationId || !spotNumber) return res.status(500).json({error: "Not all required data inserted"});

    let query = {
        text: 'UPDATE bike SET station_id = $1, assigned_to = $2 WHERE bike_id = $3',
        values: [stationId, spotNumber, bikeId]
    }

    DatabaseService.executeUpdateQuery(query)
        .then(result => res.status(200).json({success: true, rowsChanged: result}))
        .catch(e => res.status(500).json({error: "Error while assigning bike: " + e.message}));
});


router.delete('/bike/:bikeId', function (req, res) {
    const {bikeId} = req.params;

    if (!bikeId) return res.status(500).json({error: "BikeId is undefined"});

    DatabaseService.executeDeleteQuery({text: 'DELETE FROM bike WHERE bike_id = $1', values: [bikeId]})
        .then(result => res.status(200).json({success: true, rowsChanged: result}))
        .catch(e => res.status(500).json({error: "Error while deleting bike: " + e.message}))
});

module.exports = router;
