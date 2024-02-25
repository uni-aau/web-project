const express = require('express');
const router = express.Router();
const pool = require('../pool');
const DatabaseService = require("../database-service");

router.get('/', function (req, res) {
    DatabaseService.executeSelectionQuery({
        text: 'SELECT c.* , m.model_name FROM bikecategory c LEFT JOIN bikemodel m ON m.category_id = c.category_id',
        values: []
    })
        .then(results => {
            // Process results to group models by category
            const categories = {};
            results.forEach(row => {
                if (!categories[row.category_id]) {
                    categories[row.category_id] = {
                        ...row, // Spread the category details
                        models: [] // Initialize models array
                    };
                }
                categories[row.category_id].models.push(row.model_name);
            });

            // Convert the categories object back into an array
            const categoriesArray = Object.values(categories);
            res.status(200).json(categoriesArray);
        })
        .catch(e => {
            if (e.message === "Nothing found") res.status(404).json({error: e.message})
            else res.status(500).json({error: "Error while fetching bike categories: " + e.message})
        });
});

router.get('/category/:categoryId', function (req, res) {
    const {categoryId} = req.params;

    DatabaseService.executeSelectionQuery({
        text: 'SELECT * FROM bikecategory WHERE category_id = $1',
        values: [categoryId]
    })
        .then(results => res.status(200).json(results))
        .catch(e => {
            if (e.message === "Nothing found") res.status(404).json({error: e.message})
            else res.status(500).json({error: "Error while fetching bike category: " + e.message})
        });
});

router.post('/category', function (req, res) {
    const {categoryName, price} = req.body;

    if (!categoryName || !price) return res.status(500).json({error: "Not all required data inserted"});

    DatabaseService.executeInsertionQuery({
        text: 'INSERT INTO bikecategory (category_name, price) VALUES ($1, $2)',
        values: [categoryName, price]
    })
        .then(result => res.status(200).json({success: true, rowsChanged: result}))
        .catch(e => res.status(500).json({error: "Error while adding bike category: " + e.message}))
});

router.put('/category/:categoryId', function (req, res) {
    const {categoryId} = req.params;
    const {categoryName, price} = req.body;

    if (!categoryName || !price) return res.status(500).json({error: "Not all required data inserted"});

    DatabaseService.executeUpdateQuery({
        text: 'UPDATE BikeCategory SET category_name = $1, price = $2 WHERE category_id = $3',
        values: [categoryName, price, categoryId]
    })
        .then(result => res.status(200).json({success: true, rowsChanged: result}))
        .catch(e => res.status(500).json({error: "Error while updating bike category: " + e.message}))
});

router.delete('/category/:categoryId', function (req, res) {
    const {categoryId} = req.params;

    DatabaseService.executeDeleteQuery({text: 'DELETE FROM bikecategory WHERE category_id = $1', values: [categoryId]})
        .then(result => res.status(200).json({success: true, rowsChanged: result}))
        .catch(e => res.status(500).json({error: "Error while deleting bike category: " + e.message}))
});

module.exports = router;
