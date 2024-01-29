const express = require('express');
const router = express.Router();
const pool = require('../pool');

router.get('/station/:stationId', async (req, res) => {
    const { stationId } = req.params;
    try {
        const result = await pool.query('SELECT * FROM StationReview WHERE station_id = $1', [stationId]);
        res.json(result.rows);
    } catch (err) {
        console.error('Fehler beim Abrufen von Station-Bewertungen:', err.stack);
        res.status(500).send('Serverfehler');
    }
});

router.post('/', async (req, res) => {
    const { stationId, userId, rating, comment } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO StationReview (station_id, user_id, rating, comment) VALUES ($1, $2, $3, $4) RETURNING *',
            [stationId, userId, rating, comment]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('Fehler beim Erstellen einer Station-Bewertung:', err.stack);
        res.status(500).send('Serverfehler');
    }
});

router.put('/:reviewId', async (req, res) => {
    const { reviewId } = req.params;
    const { rating, comment } = req.body;
    try {
        const result = await pool.query(
            'UPDATE StationReview SET rating = $1, comment = $2 WHERE review_id = $3 RETURNING *',
            [rating, comment, reviewId]
        );
        if (result.rows.length > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).send('Station-Bewertung nicht gefunden');
        }
    } catch (err) {
        console.error('Fehler beim Aktualisieren der Station-Bewertung:', err.stack);
        res.status(500).send('Serverfehler');
    }
});

router.delete('/:reviewId', async (req, res) => {
    const { reviewId } = req.params;
    try {
        const result = await pool.query('DELETE FROM StationReview WHERE review_id = $1 RETURNING *', [reviewId]);
        if (result.rows.length > 0) {
            res.send('Station-Bewertung gelöscht');
        } else {
            res.status(404).send('Station-Bewertung nicht gefunden');
        }
    } catch (err) {
        console.error('Fehler beim Löschen der Station-Bewertung:', err.stack);
        res.status(500).send('Serverfehler');
    }
});


module.exports = router;
