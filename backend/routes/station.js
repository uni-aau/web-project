const express = require('express');
const router = express.Router();
const pool = require('../pool');
const DatabaseService = require("../database-service");

router.get('/', async (req, res) => {
    DatabaseService.executeSelectionQuery({text: 'SELECT * FROM Station', values: []})
        .then(results => res.status(200).json(results))
        .catch(e => {
            if (e.message === "Nothing found") res.status(404).json({error: e.message})
            else res.status(500).json({error: "Error while fetching stations: " + e.message})
        });
});

router.get('/station/:stationId', function (req, res) {
    const {stationId} = req.params;

    DatabaseService.executeSelectionQuery({text: 'SELECT * FROM Station WHERE station_id = $1', values: [stationId]})
        .then(results => res.status(200).json(results))
        .catch(e => {
            if (e.message === "Nothing found") res.status(404).json({error: e.message})
            else res.status(500).json({error: "Error while fetching bike: " + e.message})
        });
});

router.post('/station', async (req, res) => {
    const {stationName, description, stationAddress, longitude, latitude, stationImageLocation} = req.body;

    if (!stationName || !stationAddress || !longitude || !latitude) return res.status(500).json({error: "Not all required data inserted"});

    let query = {
        text: 'INSERT INTO station (station_name, description, station_address, longitude, latitude, station_image_location) VALUES($1, $2, $3, $4, $5, $6)',
        values: [stationName, description, stationAddress, longitude, latitude, stationImageLocation]
    }

    DatabaseService.executeInsertionQuery(query)
        .then(result => res.status(200).json({success: true, rowsChanged: result}))
        .catch(e => res.status(500).json({error: "Error while adding bike station: " + e.message}))
});

router.put('/station/:stationId', async (req, res) => {
    const {stationId} = req.params;
    const {stationName, description, stationAddress, longitude, latitude, stationImageLocation} = req.body;

    if (!stationName || !stationAddress || !longitude || !latitude) return res.status(500).json({error: "Not all required data inserted"});

    let query = {
        text: 'UPDATE station SET station_name = $1, description = $2, station_address = $3, longitude = $4, latitude = $5, station_image_location = $6 WHERE station_id = $7',
        values: [stationName, description, stationAddress, longitude, latitude, stationImageLocation, stationId]
    }

    DatabaseService.executeUpdateQuery(query)
        .then(result => res.status(200).json({success: true, rowsChanged: result}))
        .catch(e => res.status(500).json({error: "Error while updating bike station: " + e.message}))
});

router.delete('/station/:stationId', async (req, res) => {
    const {stationId} = req.params;

    DatabaseService.executeDeleteQuery({text: 'DELETE FROM station WHERE station_id = $1', values: [stationId]})
        .then(result => res.status(200).json({success: true, rowsChanged: result}))
        .catch(e => res.status(500).json({error: "Error while deleting bike station: " + e.message}))
});

router.get('/free-spot/', function (req, res) {
    const {categoryId, stationId} = req.query;

    if (!stationId || !categoryId) return res.status(500).json({error: "Not all required data inserted"});


    DatabaseService.executeSelectionQuery({
        text: 'SELECT ps.spot_number FROM ParkingSpot ps JOIN ParkingSpotCategory psc ON ps.spot_id = psc.spot_id LEFT JOIN Bike b ON ps.spot_id = b.assigned_to WHERE ps.station_id = $1 AND psc.category_id = $2 AND b.bike_id IS NULL GROUP BY ps.spot_number HAVING COUNT(b.bike_id) = 0',
        values: [stationId, categoryId]
    })
        .then(results => res.status(200).json(results))
        .catch(e => {
            if (e.message === "Nothing found") res.status(404).json({error: e.message})
            else res.status(500).json({error: "Error while fetching bike: " + e.message})
        });
})

module.exports = router;
