const express = require('express');
const router = express.Router();
const DatabaseService = require("../database-service");

router.get('/', async (req, res) => {
    DatabaseService.executeSelectionQuery({
        text: 'SELECT t.*, c.category_name, b.bike_name, m.model_name FROM Ticket t LEFT JOIN bikecategory c ON t.category_id = c.category_id LEFT JOIN bikemodel m ON t.model_id = m.model_id LEFT JOIN bike b ON t.category_id = b.bike_id',
        values: []
    })
        .then(results => res.status(200).json(results))
        .catch(e => {
            if (e.message === "Nothing found") res.status(404).json({error: e.message})
            else res.status(500).json({error: "Error while fetching tickets: " + e.message})
        });
});

router.get('/rented/:userId', async (req, res) => {
    const userId = req.params.userId;

    DatabaseService.executeSelectionQuery({
        text: 'SELECT * from Ticket where user_id = $1 AND status = \'Overdue\' OR status = \'Rented\'',
        values: [userId]
    })
        .then(results => res.status(200).json(results))
        .catch(e => {
            if (e.message === "Nothing found") res.status(404).json({error: e.message})
            else res.status(500).json({error: "Error while fetching tickets: " + e.message})
        });
});

router.post('/ticket/:ticketId/rent', async (req, res) => {
    const {ticketId} = req.params;

    // Prüfung, ob ticketId vorhanden ist
    if (!ticketId) {
        return res.status(400).json({error: 'ticketId is required'});
    }

    const updateQuery = 'UPDATE Ticket SET status = \'Rented\' WHERE ticket_id = $1';

    DatabaseService.executeUpdateQuery({
        text: updateQuery,
        values: [ticketId]
    })
        .then(results => res.status(200).json(results))
        .catch(e => {
            if (e.message === "Nothing found") res.status(404).json({error: e.message})
            else res.status(500).json({error: `Error while renting tickets: ` + e.message})
        });
});


router.get('/:userId', async (req, res) => {
    const {userId} = req.params;

    DatabaseService.executeSelectionQuery({
        text: 'SELECT * FROM Ticket WHERE user_id = $1',
        values: [userId]
    })
        .then(results => res.status(200).json(results))
        .catch(e => {
            if (e.message === "Nothing found") res.status(404).json({error: e.message})
            else res.status(500).json({error: `Error while fetching tickets of user ${userId}: ` + e.message})
        });
});

router.post('/ticket', async (req, res) => {
    const {
        userId,
        bookedType,
        bikeId,
        modelId,
        categoryId,
        status,
        bookingTime,
        rentingStart,
        rentingEnd,
        price
    } = req.body;
    console.log("book")
    if (!userId || !bookedType || !status || !bookingTime || !rentingStart || !rentingEnd || !price) return res.status(500).json({error: "Not all required data inserted"});

    let query = {
        text: 'INSERT INTO Ticket (user_id, booked_type, bike_id, model_id, category_id, status, booking_time, renting_start, renting_end, price) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
        values: [userId, bookedType, bikeId, modelId, categoryId, status, bookingTime, rentingStart, rentingEnd, price]
    }

    DatabaseService.executeInsertionQuery(query)
        .then(result => res.status(200).json({success: true, rowsChanged: result}))
        .catch(e => res.status(500).json({error: "Error while adding bike: " + e.message}))
});

router.put('/ticket/:ticketId', function (req, res) {
    const {ticketId} = req.params;
    const {userId, bookedType, bikeId, modelId, categoryId, status, bookingTime, rentingStart, rentingEnd} = req.body;

    if (!userId || !bookedType || !status || !bookingTime || !rentingStart || !rentingEnd) return res.status(500).json({error: "Not all required data inserted"});

    let query = {
        text: 'UPDATE ticket SET user_id = $1, booked_type = $2, bike_id = $3, model_id = $4, category_id = $5, status = $6, booking_time, renting_start = $7, renting_end = $8 WHERE ticket_id = $9',
        values: [userId, bookedType, bikeId, modelId, categoryId, status, bookingTime, rentingStart, rentingEnd, ticketId]
    }

    DatabaseService.executeUpdateQuery(query)
        .then(result => res.status(200).json({success: true, rowsChanged: result}))
        .catch(e => res.status(500).json({error: "Error while updating ticket: " + e.message}))
});

router.put('/ticket/:ticketId/status', function (req, res) {
    const {ticketId} = req.params;
    const {status} = req.body;

    if (!status) return res.status(500).json({error: "Not all required data inserted"});

    let query = {
        text: 'UPDATE ticket SET status = $1 WHERE ticket_id = $2',
        values: [status, ticketId]
    }

    DatabaseService.executeUpdateQuery(query)
        .then(result => res.status(200).json({success: true, rowsChanged: result}))
        .catch(e => res.status(500).json({error: "Error while updating ticket: " + e.message}))
});

router.delete('/ticket/:ticketId', async (req, res) => {
    const {ticketId} = req.params;

    if (!ticketId) return res.status(500).json({error: "TicketId is undefined"});

    DatabaseService.executeDeleteQuery({text: 'DELETE FROM ticket WHERE ticket_id = $1', values: [ticketId]})
        .then(result => res.status(200).json({success: true, rowsChanged: result}))
        .catch(e => res.status(500).json({error: "Error while deleting ticket: " + e.message}))
});

module.exports = router;
