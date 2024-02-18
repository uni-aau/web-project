const express = require('express');
const router = express.Router();
const DatabaseService = require("../database-service");

router.put('/balance', function (req, res) {
    const {userId} = req.user;
    const {balance} = req.body;

    if (!userId || !balance) return res.status(500).json({error: "Balance or userId is undefined"});

    let query = {
        text: 'SELECT wallet_id FROM "User" WHERE user_id = $1',
        values: [userId]
    }

    DatabaseService.executeSelectionQuery(query)
        .then(result => {
            let query = {
                text: 'UPDATE Wallet SET balance = $1 WHERE wallet_id = $2',
                values: [balance, result[0].wallet_id]
            }

            DatabaseService.executeUpdateQuery(query)
                .then(result => res.status(200).json({message: "success", rowsChanged: result}))
                .catch(e => res.status(500).json({error: e.message}))
        })
        .catch(e => res.status(500).json({error: e.message}));
});

router.get('/balance', function (req, res) {
    const {userId} = req.user;

    if (!userId) return res.status(500).json({error: "UserId is undefined"});

    DatabaseService.executeSelectionQuery({text: 'SELECT wallet_id FROM "User" WHERE user_id = $1', values: [userId]})
        .then(result => {
            DatabaseService.executeSelectionQuery({
                text: 'SELECT balance, available_balance FROM wallet WHERE wallet_id = $1',
                values: [result[0].wallet_id]
            })
                .then(results => res.status(200).json(results))
                .catch(e => res.status(500).json({error: e.message}))
        })
        .catch(e => res.status(500).json({error: e.message}));
});

router.put('/available-balance', function (req, res) {
    const {userId} = req.user;
    const {availableBalance} = req.body;

    if (!userId || !availableBalance) return res.status(500).json({error: "Available balance or userId is undefined"});

    DatabaseService.executeSelectionQuery({text: 'SELECT wallet_id FROM "User" WHERE user_id = $1', values: [userId]})
        .then(result => {
            DatabaseService.executeUpdateQuery({
                text: 'UPDATE Wallet SET available_balance = $1 WHERE wallet_id = $2',
                values: [availableBalance, result.rows[0].wallet_id]
            })
                .then(result => res.status(200).json({message: "success", rowsChanged: result}))
                .catch(e => res.status(500).json({error: e.message}))
        })
        .catch(e => res.status(500).json({error: e.message}));
});

router.get('/bank-connection', function (req, res) {
    const {userId} = req.user;

    if (!userId) return res.status(500).json({error: "UserId is undefined"});

    DatabaseService.executeSelectionQuery({
        text: 'SELECT has_connected_bank_account FROM "User" where user_id = $1',
        values: [userId]
    })
        .then(results => res.status(200).json(results))
        .catch(e => res.status(500).json({error: e.message}))
});

router.put('/connect', function (req, res) {
    const {userId} = req.user;

    if (!userId) return res.status(500).json({error: "UserId is undefined"});

    DatabaseService.executeUpdateQuery({
        text: 'UPDATE "User" SET has_connected_bank_account = TRUE where user_id = $1',
        values: [userId]
    })
        .then(result => res.status(200).json({message: "success", rowsChanged: result}))
        .catch(e => res.status(500).json({error: e.message}))
});

router.put('/disconnect', function (req, res) {
    const {userId} = req.user;

    if (!userId) return res.status(500).json({error: "UserId is undefined"});

    DatabaseService.executeUpdateQuery({
        text: 'UPDATE "User" SET has_connected_bank_account = FALSE where user_id = $1',
        values: [userId]
    })
        .then(result => res.status(200).json({message: "success", rowsChanged: result}))
        .catch(e => res.status(500).json({error: e.message}))
});

module.exports = router;