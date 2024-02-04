const express = require('express');
const router = express.Router();
const pool = require('../pool');

router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM Bike');
        res.json(result.rows);
    } catch (err) {
        console.error('Fehler beim Abrufen der Fahrräder:', err.stack);
        res.status(500).send('Serverfehler');
    }
});

router.get('/:bikeId', async (req, res) => {
    const { bikeId } = req.params;
    try {
        const result = await pool.query('SELECT * FROM Bike WHERE bike_id = $1', [bikeId]);
        if (result.rows.length > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).send('Fahrrad nicht gefunden');
        }
    } catch (err) {
        console.error('Fehler beim Abrufen des Fahrrads:', err.stack);
        res.status(500).send('Serverfehler');
    }
});

router.post('/', async (req, res) => {
    const { stationId, modelId, isAvailable } = req.body;
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
    const { bikeId } = req.params;
    const { stationId, modelId, isAvailable } = req.body;
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

router.delete('/:bikeId', async (req, res) => {
    const { bikeId } = req.params;
    try {
        const result = await pool.query('DELETE FROM Bike WHERE bike_id = $1 RETURNING *', [bikeId]);
        if (result.rows.length > 0) {
            res.send('Fahrrad gelöscht');
        } else {
            res.status(404).send('Fahrrad nicht gefunden');
        }
    } catch (err) {
        console.error('Fehler beim Löschen des Fahrrads:', err.stack);
        res.status(500).send('Serverfehler');
    }
});

module.exports = router;
