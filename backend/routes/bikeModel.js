const express = require('express');
const router = express.Router();
const pool = require('../pool');

router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM BikeModel');
        res.json(result.rows);
    } catch (err) {
        console.error('Fehler beim Abrufen der Fahrradmodelle:', err.stack);
        res.status(500).send('Serverfehler');
    }
});

router.get('/:modelId', async (req, res) => {
    const { modelId } = req.params;
    try {
        const result = await pool.query('SELECT * FROM BikeModel WHERE model_id = $1', [modelId]);
        if (result.rows.length > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).send('Fahrradmodell nicht gefunden');
        }
    } catch (err) {
        console.error('Fehler beim Abrufen des Fahrradmodells:', err.stack);
        res.status(500).send('Serverfehler');
    }
});

router.post('/', async (req, res) => {
    const { categoryId, name, description, wheelSize, extraFeatures } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO BikeModel (category_id, name, description, wheel_size, extra_features) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [categoryId, name, description, wheelSize, extraFeatures]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('Fehler beim Erstellen des Fahrradmodells:', err.stack);
        res.status(500).send('Serverfehler');
    }
});

router.put('/:modelId', async (req, res) => {
    const { modelId } = req.params;
    const { categoryId, name, description, wheelSize, extraFeatures } = req.body;
    try {
        const result = await pool.query(
            'UPDATE BikeModel SET category_id = $1, name = $2, description = $3, wheel_size = $4, extra_features = $5 WHERE model_id = $6 RETURNING *',
            [categoryId, name, description, wheelSize, extraFeatures, modelId]
        );
        if (result.rows.length > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).send('Fahrradmodell nicht gefunden');
        }
    } catch (err) {
        console.error('Fehler beim Aktualisieren des Fahrradmodells:', err.stack);
        res.status(500).send('Serverfehler');
    }
});

router.delete('/:modelId', async (req, res) => {
    const { modelId } = req.params;
    try {
        const result = await pool.query('DELETE FROM BikeModel WHERE model_id = $1 RETURNING *', [modelId]);
        if (result.rows.length > 0) {
            res.send('Fahrradmodell gelöscht');
        } else {
            res.status(404).send('Fahrradmodell nicht gefunden');
        }
    } catch (err) {
        console.error('Fehler beim Löschen des Fahrradmodells:', err.stack);
        res.status(500).send('Serverfehler');
    }
});

module.exports = router;
