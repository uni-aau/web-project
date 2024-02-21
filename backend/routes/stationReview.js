const express = require('express');
const router = express.Router();
const DatabaseService = require('../database-service');

router.get('/station/:stationId', async (req, res) => {
    const {stationId} = req.params;

    DatabaseService.executeSelectionQuery({
        text: 'SELECT u.username, u.profile_picture_location, b.model_name, s.* FROM stationreview s JOIN "User" u ON s.user_id = u.user_id LEFT JOIN bikemodel b ON s.model_id = b.model_id WHERE s.station_id = $1',
        values: [stationId]
    })
        .then(results => res.status(200).json(results))
        .catch(e => {
            if (e.message === "Nothing found") res.status(404).json({error: e.message})
            else res.status(500).json({error: `Error while fetching reviews from station ${stationId}: ` + e.message})
        });
});

router.post('/review/station/:stationId', async (req, res) => {
    const {stationId} = req.params;
    const {userId} = req.user;
    const {rating, title, comment, modelId} = req.body;

    console.log(stationId + " " + userId + " " + rating + " " + title + " " + comment);
    if (!stationId || !userId || !rating || !title) return res.status(500).json({error: "Not all required data inserted"});

    DatabaseService.executeInsertionQuery({
        text: 'INSERT INTO stationreview (station_id, user_id, title, model_id, rating, comment) VALUES($1, $2, $3, $4, $5, $6)',
        values: [stationId, userId, title, modelId, rating, comment]
    })
        .then(result => res.status(200).json({success: true, rowsChanged: result}))
        .catch(e => res.status(500).json({error: `Error while adding new review to station ${stationId}: ` + e.message}))
});

router.put('/review/:reviewId/station/:stationId', async (req, res) => {
    const {reviewId, stationId} = req.params;
    const {rating, title, comment, modelId} = req.body;

    if (!rating || !title || !comment) return res.status(500).json({error: "Not all required data inserted"});

    DatabaseService.executeUpdateQuery({
        text: 'UPDATE stationreview SET rating = $1, title = $2, comment = $3, model_id = $4 station_id = $5 WHERE review_id = $6',
        values: [rating, title, comment, modelId, stationId, reviewId]
    })
        .then(result => res.status(200).json({success: true, rowsChanged: result}))
        .catch(e => res.status(500).json({error: "Error while updating review: " + e.message}))
});

router.delete('/review/:reviewId', async (req, res) => {
    const {reviewId} = req.params;

    DatabaseService.executeDeleteQuery({text: 'DELETE FROM stationreview WHERE review_id = $1', values: [reviewId]})
        .then(result => res.status(200).json({success: true, rowsChanged: result}))
        .catch(e => res.status(500).json({error: "Error while deleting review: " + e.message}))
});

router.delete('/review/station/:stationId', async (req, res) => {
    const {stationId} = req.params;

    DatabaseService.executeDeleteQuery({text: 'DELETE FROM stationreview WHERE station_id = $1', values: [stationId]})
        .then(result => res.status(200).json({success: true, rowsChanged: result}))
        .catch(e => res.status(500).json({error: "Error while deleting review: " + e.message}))
});


module.exports = router;
