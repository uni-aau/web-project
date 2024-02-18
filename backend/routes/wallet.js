const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const pool = require('../pool');
const {reject} = require("bcrypt/promises");

router.put('/balance', function (req, res) {
    const {userId} = req.user;
    const {balance} = req.body;

    if (!userId || !balance) return res.status(500).json({error: "Balance or userId is undefined"});

    pool.query('SELECT wallet_id FROM "User" WHERE user_id = $1', [userId])
        .then(result => {
            if (result.rowCount > 0) {
                let query = {
                    text: 'UPDATE Wallet SET balance = $1 WHERE wallet_id = $2',
                    values: [balance, result.rows[0].wallet_id]
                }

                executeUpdateQuery(query)
                    .then(result => res.status(200).json({message: "success", rowsChanged: result}))
                    .catch(e => res.status(500).json({error: e.message}))
            } else {
                return res.status(500).json({error: "User has no wallet", user: userId});
            }
        })
        .catch(e => res.status(500).json({error: e}));
});

router.get('/balance', function (req, res) {
    const {userId} = req.user;

    if (!userId) return res.status(500).json({error: "UserId is undefined"});

    pool.query('SELECT wallet_id FROM "User" WHERE user_id = $1', [userId])
        .then(result => {
            if (result.rowCount > 0) {
                let query = {
                    text: 'SELECT balance, available_balance FROM wallet WHERE wallet_id = $1',
                    values: [result.rows[0].wallet_id]
                }

                executeSelectionQuery(query)
                    .then(results=> res.status(200).json(results))
                    .catch(e => res.status(500).json({error: e.message}))

            } else {
                return res.status(500).json({error: "User has no wallet", user: userId});
            }
        })
        .catch(e => res.status(500).json({error: e}));
});

// TODO
router.put('/available-balance', function (req, res) {
    const {userId} = req.user;
    const {availableBalance} = req.body;

    if (!userId || !availableBalance) return res.status(500).json({error: "Available balance or userId is undefined"});

    pool.query('SELECT wallet_id FROM "User" WHERE user_id = $1', [userId])
        .then(result => {
            if (result.rowCount > 0) {
                let query = {
                    text: 'UPDATE Wallet SET available_balance = $1 WHERE wallet_id = $2',
                    values: [availableBalance, result.rows[0].wallet_id]
                }

                executeUpdateQuery(query)
                    .then(result => res.status(200).json({message: "success", rowsChanged: result}))
                    .catch(e => res.status(500).json({error: e.message}))
            } else {
                return res.status(500).json({error: "User has no wallet", user: userId});
            }
        })
        .catch(e => res.status(500).json({error: e}));
});


function executeUpdateQuery(query) {
    console.log("Executing: " + query.text + " with values: " + query.values);

    return new Promise((resolve, reject) => {
        pool.query(query)
            .then(results => {
                if (results.rowCount <= 0) reject(new Error("No data changed"));
                else resolve(results.rowCount);
            })
            .catch(error => {
                reject(error.message)
            })
    })
}

function executeSelectionQuery(query) {
    console.log("Executing: " + query.text + " with values: " + query.values);

    return new Promise((resolve, reject) => {
        pool.query(query)
            .then(results => {
                if (results.rows.length <= 0) reject(new Error("Now rows found to select"));
                else resolve(results.rows);
            })
            .catch(error => {
                reject(new Error("Error fetching product: " + error.message));
            });
    });
}

module.exports = router;