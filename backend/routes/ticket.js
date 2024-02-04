const express = require('express');
const router = express.Router();
const pool = require('../pool');

router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM ticket');
        res.json(result.rows);
    } catch (err) {
        console.error('Fehler beim Abrufen der Tickets:', err.stack);
        res.status(500).send('Serverfehler');
    }
});

router.post('/', async (req, res) => {
    const { userId, categoryId, startTime, endTime, status } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO ticket (user_id, category_id, start_time, end_time, status) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [userId, categoryId, startTime, endTime, status]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('Fehler beim Erstellen des Tickets:', err.stack);
        res.status(500).send('Serverfehler');
    }
});

router.put('/:ticketId', async (req, res) => {
    const { ticketId } = req.params;
    const { userId, categoryId, startTime, endTime, status } = req.body;
    try {
        const result = await pool.query(
            'UPDATE ticket SET user_id = $1, category_id = $2, start_time = $3, end_time = $4, status = $5 WHERE ticket_id = $6 RETURNING *',
            [userId, categoryId, startTime, endTime, status, ticketId]
        );
        if (result.rows.length > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).send('Ticket nicht gefunden');
        }
    } catch (err) {
        console.error('Fehler beim Aktualisieren des Tickets:', err.stack);
        res.status(500).send('Serverfehler');
    }
});

router.delete('/:ticketId', async (req, res) => {
    const { ticketId } = req.params;
    try {
        const result = await pool.query('DELETE FROM ticket WHERE ticket_id = $1 RETURNING *', [ticketId]);
        if (result.rows.length > 0) {
            res.send('Ticket gelöscht');
        } else {
            res.status(404).send('Ticket nicht gefunden');
        }
    } catch (err) {
        console.error('Fehler beim Löschen des Tickets:', err.stack);
        res.status(500).send('Serverfehler');
    }
});

module.exports = router;
