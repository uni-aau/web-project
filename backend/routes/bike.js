const express = require('express');
const router = express.Router();
const pool = require('../pool');
const DatabaseService = require('../database-service')

router.get('/', function (eq, res) {
    DatabaseService.executeSelectionQuery({text: 'SELECT * FROM Bike', values: []})
        .then(results => res.status(200).json(results))
        .catch(e => res.status(500).json({error: "Error while fetching bikes: " + e.message}))
});

router.get('bike/:bikeId', function (req, res) {
    const {bikeId} = req.params;

    DatabaseService.executeSelectionQuery({text: 'SELECT * FROM Bike WHERE bike_id = $1', values: [bikeId]})
        .then(results => res.status(200).json(results))
        .catch(e => res.status(500).json({error: "Error while fetching the bike: " + e.message}))
});

router.post('/', async (req, res) => {
    const {stationId, modelId, isAvailable} = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO Bike (station_id, model_id, is_available) VALUES ($1, $2, $3) RETURNING *',
            [stationId, modelId, isAvailable]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('Fehler beim Hinzufügen des Fahrrads:', err.stack);
        res.status(500).send('Serverfehler');
    }
});

router.put('/:bikeId', async (req, res) => {
    const {bikeId} = req.params;
    const {stationId, modelId, isAvailable} = req.body;
    try {
        const result = await pool.query(
            'UPDATE Bike SET station_id = $1, model_id = $2, is_available = $3 WHERE bike_id = $4 RETURNING *',
            [stationId, modelId, isAvailable, bikeId]
        );
        if (result.rows.length > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).send('Fahrrad nicht gefunden');
        }
    } catch (err) {
        console.error('Fehler beim Aktualisieren des Fahrrads:', err.stack);
        res.status(500).send('Serverfehler');
    }
});

router.delete('/:bikeId', function (req, res) {
    const {bikeId} = req.params;

    if (!bikeId) return res.status(500).json({error: "BikeId is undefined"});

    DatabaseService.executeDeleteQuery()
        .then(result => res.status(200).json({message: "success", rowsChanged: result}))
        .catch(e => res.status(500).json({error: "Error while deleting bike: " + e.message}))
});

module.exports = router;
