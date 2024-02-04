const express = require('express');
const router = express.Router();
const pool = require('../pool');

router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM BikeCategory');
        res.json(result.rows);
    } catch (err) {
        console.error('Fehler beim Abrufen der Fahrradkategorien:', err.stack);
        res.status(500).send('Serverfehler');
    }
});

router.get('/:categoryId', async (req, res) => {
    const { categoryId } = req.params;
    try {
        const result = await pool.query('SELECT * FROM BikeCategory WHERE category_id = $1', [categoryId]);
        if (result.rows.length > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).send('Fahrradkategorie nicht gefunden');
        }
    } catch (err) {
        console.error('Fehler beim Abrufen der Fahrradkategorie:', err.stack);
        res.status(500).send('Serverfehler');
    }
});

router.post('/', async (req, res) => {
    const { name } = req.body;
    try {
        const result = await pool.query('INSERT INTO BikeCategory (name) VALUES ($1) RETURNING *', [name]);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('Fehler beim Erstellen der Fahrradkategorie:', err.stack);
        res.status(500).send('Serverfehler');
    }
});

router.put('/:categoryId', async (req, res) => {
    const { categoryId } = req.params;
    const { name } = req.body;
    try {
        const result = await pool.query('UPDATE BikeCategory SET name = $1 WHERE category_id = $2 RETURNING *', [name, categoryId]);
        if (result.rows.length > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).send('Fahrradkategorie nicht gefunden');
        }
    } catch (err) {
        console.error('Fehler beim Aktualisieren der Fahrradkategorie:', err.stack);
        res.status(500).send('Serverfehler');
    }
});

router.delete('/:categoryId', async (req, res) => {
    const { categoryId } = req.params;
    try {
        const result = await pool.query('DELETE FROM BikeCategory WHERE category_id = $1 RETURNING *', [categoryId]);
        if (result.rows.length > 0) {
            res.send('Fahrradkategorie gelöscht');
        } else {
            res.status(404).send('Fahrradkategorie nicht gefunden');
        }
    } catch (err) {
        console.error('Fehler beim Löschen der Fahrradkategorie:', err.stack);
        res.status(500).send('Serverfehler');
    }
});

module.exports = router;
