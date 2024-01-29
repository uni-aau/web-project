const express = require('express');
const router = express.Router();
const pool = require('../pool');

router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM station');
        res.json(result.rows);
    } catch (err) {
        console.error('Fehler beim Abrufen der Stations:', err.stack);
        res.status(500).send('Serverfehler');
    }
});

router.post('/', async (req, res) => {
    const { name, location, longitude, latitude } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO station (name, location, longitude, latitude) VALUES ($1, $2, $3, $4) RETURNING *',
            [name, location, longitude, latitude]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('Fehler beim Hinzufügen der Station:', err.stack);
        res.status(500).send('Serverfehler');
    }
});

router.put('/:stationId', async (req, res) => {
    const { stationId } = req.params;
    const { name, location, longitude, latitude } = req.body;
    try {
        const result = await pool.query(
            'UPDATE station SET name = $1, location = $2, longitude = $3, latitude = $4 WHERE station_id = $5 RETURNING *',
            [name, location, longitude, latitude, stationId]
        );
        if (result.rows.length > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).send('Station nicht gefunden');
        }
    } catch (err) {
        console.error('Fehler beim Aktualisieren der Station:', err.stack);
        res.status(500).send('Serverfehler');
    }
});

router.delete('/:stationId', async (req, res) => {
    const { stationId } = req.params;
    try {
        const result = await pool.query('DELETE FROM station WHERE station_id = $1 RETURNING *', [stationId]);
        if (result.rows.length > 0) {
            res.send('Station gelöscht');
        } else {
            res.status(404).send('Station nicht gefunden');
        }
    } catch (err) {
        console.error('Fehler beim Löschen der Station:', err.stack);
        res.status(500).send('Serverfehler');
    }
});

module.exports = router;
