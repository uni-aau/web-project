const express = require('express');
const router = express.Router();
const pool = require('../pool');
const DatabaseService = require("../database-service");

router.get('/', function (req, res) {
    DatabaseService.executeSelectionQuery({text: 'SELECT m.*, c.category_name, COUNT(b.bike_id) AS bike_count FROM bikemodel m JOIN BikeCategory c ON m.category_id = c.category_id LEFT JOIN bike b ON b.model_id = m.model_id GROUP BY m.model_id, c.category_id', values: []})
        .then(results => res.status(200).json(results))
        .catch(e => {
            if (e.message === "Nothing found") res.status(404).json({error: e.message})
            else res.status(500).json({error: "Error while fetching bike models: " + e.message})
        });
});

router.get('/model/:modelId', function (req, res) {
    const {modelId} = req.params;

    DatabaseService.executeSelectionQuery({
        text: 'SELECT * FROM bikemodel WHERE model_id = $1',
        values: [modelId]
    })
        .then(results => res.status(200).json(results))
        .catch(e => {
            if (e.message === "Nothing found") res.status(404).json({error: e.message})
            else res.status(500).json({error: "Error while fetching bike model: " + e.message})
        });
});

router.post('/model', function (req, res) {
    const {modelName, price, categoryId} = req.body;

    if (!modelName || !price || !categoryId) return res.status(500).json({error: "Not all required data inserted"});

    DatabaseService.executeInsertionQuery({
        text: 'INSERT INTO bikemodel (model_name, price, category_id) VALUES ($1, $2, $3)',
        values: [modelName, price, categoryId]
    })
        .then(result => res.status(200).json({success: true, rowsChanged: result}))
        .catch(e => res.status(500).json({error: "Error while adding bike model: " + e.message}))
});

router.put('/model/:modelId', function (req, res) {
    const {modelId} = req.params;
    const {modelName, price, categoryId} = req.body;

    if (!modelName || !price || !categoryId) return res.status(500).json({error: "Not all required data inserted"});

    DatabaseService.executeUpdateQuery({
        text: 'UPDATE bikemodel SET model_name = $1, price = $2, category_id = $3 WHERE model_id = $4',
        values: [modelName, price, categoryId, modelId]
    })
        .then(result => res.status(200).json({success: true, rowsChanged: result}))
        .catch(e => res.status(500).json({error: "Error while updating bike model: " + e.message}))
});

router.delete('/model/:modelId', function (req, res) {
    const {modelId} = req.params;

    DatabaseService.executeDeleteQuery({text: 'DELETE FROM bikemodel WHERE model_id = $1', values: [modelId]})
        .then(result => res.status(200).json({success: true, rowsChanged: result}))
        .catch(e => res.status(500).json({error: "Error while deleting bike model: " + e.message}))
});

module.exports = router;
