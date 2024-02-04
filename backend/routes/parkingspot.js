const express = require('express');
const router = express.Router();
const pool = require('../pool');

router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM ParkingSpot');
        res.json(result.rows);
    } catch (err) {
        console.error('Fehler beim Abrufen der Parkplätze:', err.stack);
        res.status(500).send('Serverfehler');
    }
});

router.get('/:spotId', async (req, res) => {
    const { spotId } = req.params;
    try {
        const result = await pool.query('SELECT * FROM ParkingSpot WHERE spot_id = $1', [spotId]);
        if (result.rows.length > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).send('Parkplatz nicht gefunden');
        }
    } catch (err) {
        console.error('Fehler beim Abrufen des Parkplatzes:', err.stack);
        res.status(500).send('Serverfehler');
    }
});

router.post('/', async (req, res) => {
    const { stationId, spotNumber, categoryId } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO ParkingSpot (station_id, spot_number, category_id) VALUES ($1, $2, $3) RETURNING *',
            [stationId, spotNumber, categoryId]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('Fehler beim Hinzufügen des Parkplatzes:', err.stack);
        res.status(500).send('Serverfehler');
    }
});

router.put('/:spotId', async (req, res) => {
    const { spotId } = req.params;
    const { stationId, spotNumber, categoryId } = req.body;
    try {
        const result = await pool.query(
            'UPDATE ParkingSpot SET station_id = $1, spot_number = $2, category_id = $3 WHERE spot_id = $4 RETURNING *',
            [stationId, spotNumber, categoryId, spotId]
        );
        if (result.rows.length > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).send('Parkplatz nicht gefunden');
        }
    } catch (err) {
        console.error('Fehler beim Aktualisieren des Parkplatzes:', err.stack);
        res.status(500).send('Serverfehler');
    }
});

router.delete('/:spotId', async (req, res) => {
    const { spotId } = req.params;
    try {
        const result = await pool.query('DELETE FROM ParkingSpot WHERE spot_id = $1 RETURNING *', [spotId]);
        if (result.rows.length > 0) {
            res.send('Parkplatz gelöscht');
        } else {
            res.status(404).send('Parkplatz nicht gefunden');
        }
    } catch (err) {
        console.error('Fehler beim Löschen des Parkplatzes:', err.stack);
        res.status(500).send('Serverfehler');
    }
});

module.exports = router;
