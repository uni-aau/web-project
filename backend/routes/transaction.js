const express = require('express');
const router = express.Router();
const pool = require('../pool');

router.get('/user/:userId', async (req, res) => {
    const {userId} = req.params;
    try {
        const result = await pool.query('SELECT * FROM Transaction WHERE user_id = $1', [userId]);
        res.json(result.rows);
    } catch (err) {
        console.error('Fehler beim Abrufen von Transaktionen:', err.stack);
        res.status(500).send('Serverfehler');
    }
});

router.post('/', async (req, res) => {
    const {userId, amount, transactionType} = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO Transaction (user_id, amount, transaction_type) VALUES ($1, $2, $3) RETURNING *',
            [userId, amount, transactionType]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('Fehler beim Erstellen einer Transaktion:', err.stack);
        res.status(500).send('Serverfehler');
    }
});

router.put('/:transactionId', async (req, res) => {
    const {transactionId} = req.params;
    const {amount, transactionType} = req.body;
    try {
        const result = await pool.query(
            'UPDATE Transaction SET amount = $1, transaction_type = $2 WHERE transaction_id = $3 RETURNING *',
            [amount, transactionType, transactionId]
        );
        if (result.rows.length > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).send('Transaktion nicht gefunden');
        }
    } catch (err) {
        console.error('Fehler beim Aktualisieren der Transaktion:', err.stack);
        res.status(500).send('Serverfehler');
    }
});

router.delete('/:transactionId', async (req, res) => {
    const {transactionId} = req.params;
    try {
        const result = await pool.query('DELETE FROM Transaction WHERE transaction_id = $1 RETURNING *', [transactionId]);
        if (result.rows.length > 0) {
            res.send('Transaktion gelöscht');
        } else {
            res.status(404).send('Transaktion nicht gefunden');
        }
    } catch (err) {
        console.error('Fehler beim Löschen der Transaktion:', err.stack);
        res.status(500).send('Serverfehler');
    }
});


module.exports = router;
