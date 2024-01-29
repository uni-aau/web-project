const express = require('express');
const router = express.Router();
const pool = require('../pool');

router.get('/bikeModel/:modelId', async (req, res) => {
    const { modelId } = req.params;
    try {
        const result = await pool.query('SELECT * FROM BikeModelReview WHERE model_id = $1', [modelId]);
        res.json(result.rows);
    } catch (err) {
        console.error('Fehler beim Abrufen von Fahrradmodell-Bewertungen:', err.stack);
        res.status(500).send('Serverfehler');
    }
});

router.post('/', async (req, res) => {
    const { modelId, userId, rating, comment } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO BikeModelReview (model_id, user_id, rating, comment) VALUES ($1, $2, $3, $4) RETURNING *',
            [modelId, userId, rating, comment]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('Fehler beim Erstellen einer Fahrradmodell-Bewertung:', err.stack);
        res.status(500).send('Serverfehler');
    }
});

router.put('/:reviewId', async (req, res) => {
    const { reviewId } = req.params;
    const { rating, comment } = req.body;
    try {
        const result = await pool.query(
            'UPDATE BikeModelReview SET rating = $1, comment = $2 WHERE review_id = $3 RETURNING *',
            [rating, comment, reviewId]
        );
        if (result.rows.length > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).send('Fahrradmodell-Bewertung nicht gefunden');
        }
    } catch (err) {
        console.error('Fehler beim Aktualisieren der Fahrradmodell-Bewertung:', err.stack);
        res.status(500).send('Serverfehler');
    }
});

router.delete('/:reviewId', async (req, res) => {
    const { reviewId } = req.params;
    try {
        const result = await pool.query('DELETE FROM BikeModelReview WHERE review_id = $1 RETURNING *', [reviewId]);
        if (result.rows.length > 0) {
            res.send('Fahrradmodell-Bewertung gelöscht');
        } else {
            res.status(404).send('Fahrradmodell-Bewertung nicht gefunden');
        }
    } catch (err) {
        console.error('Fehler beim Löschen der Fahrradmodell-Bewertung:', err.stack);
        res.status(500).send('Serverfehler');
    }
});


module.exports = router;
