const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const pool = require('../pool');
const {reject} = require("bcrypt/promises");

router.get('/:userId', async (req, res) => {
    const {userId} = req.params;

    try {
        const result = await pool.query('SELECT "User".user_id, "User".username, "User".email, Wallet.balance AS wallet_balance FROM "User" INNER JOIN Wallet ON "User".wallet_id = Wallet.wallet_id WHERE "User".user_id = $1', [userId]);
        if (result.rows.length > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).send('Benutzer nicht gefunden');
        }
    } catch (err) {
        console.error('Fehler beim Abrufen des Benutzers:', err.stack);
        res.status(500).send('Serverfehler');
    }
});

router.put('/:userId/wallet', async (req, res) => {
    const {userId} = req.params;
    const {balance} = req.body;

    try {
        const userResult = await pool.query('SELECT wallet_id FROM "User" WHERE user_id = $1', [userId]);
        if (userResult.rows.length === 0) {
            return res.status(404).send('Benutzer nicht gefunden');
        }

        const walletResult = await pool.query('UPDATE Wallet SET balance = $1 WHERE wallet_id = $2 RETURNING *', [balance, userResult.rows[0].wallet_id]);
        res.json(walletResult.rows[0]);
    } catch (err) {
        console.error('Fehler beim Aktualisieren des Wallet-Guthabens:', err.stack);
        res.status(500).send('Serverfehler');
    }
});

router.put('/firstname', function (req, res) {
    const {userId} = req.user;
    const {firstname} = req.body;

    if (!firstname || !userId) return res.status(500).json({error: "Firstname or userId is undefined"});

    let query = {
        text: 'UPDATE "User" SET firstname = $1 WHERE user_id = $2',
        values: [firstname, userId]
    }

    executeUpdateQuery(query)
        .then(result => res.status(200).json({message: "success", rowsChanged: result}))
        .catch(e => res.status(500).json({error: e.message}))
});

router.put('/lastname', function (req, res) {
    const {userId} = req.user;
    const {lastname} = req.body;

    if (!lastname || !userId) return res.status(500).json({error: "Lastname or userId is undefined"});

    let query = {
        text: 'UPDATE "User" SET lastname = $1 WHERE user_id = $2',
        values: [lastname, userId]
    }

    executeUpdateQuery(query)
        .then(result => res.status(200).json({message: "success", rowsChanged: result}))
        .catch(e => res.status(500).json({error: e.message}))
});

router.put('/email', function (req, res) {
    const {userId} = req.user;
    const {email} = req.body;

    if (!email || !userId) return res.status(500).json({error: "Email or userId is undefined"});

    let query = {
        text: 'SELECT user_id FROM "User" WHERE email = $1',
        values: [email]
    }

    pool.query(query).then(result => {
        if (result.rowCount > 0) return res.status(500).json({
            error: "User with this mail already exist",
            userId: result.userId
        });
        else {
            query = {
                text: 'UPDATE "User" SET email = $1 WHERE user_id = $2',
                values: [email, userId]
            }

            executeUpdateQuery(query)
                .then(result => res.status(200).json({message: "success", rowsChanged: result}))
                .catch(e => res.status(500).json({error: e.message}))
        }
    }).catch(e => res.status(500).json({error: e}));
});

// TODO maybe select in methode auslagern
router.put('/username', function (req, res) {
    const {userId} = req.user;
    const {username} = req.body;

    if (!username || !userId) return res.status(500).json({error: "Username or userId is undefined"});

    let query = {
        text: 'SELECT user_id FROM "User" WHERE username = $1',
        values: [username]
    }

    pool.query(query).then(result => {
        if (result.rowCount > 0) return res.status(500).json({
            error: "User with this username already exist",
            userId: result.userId
        });
        else {
            query = {
                text: 'UPDATE "User" SET username = $1 WHERE user_id = $2',
                values: [username, userId]
            }

            executeUpdateQuery(query)
                .then(result => res.status(200).json({message: "success", rowsChanged: result}))
                .catch(e => res.status(500).json({error: e.message}))
        }
    }).catch(e => res.status(500).json({error: e}));
});

router.put('/profile-picture', function (req, res) {
    const {userId} = req.user;
    const {profilePictureLocation} = req.body;

    if (!profilePictureLocation || !userId) return res.status(500).json({error: "Image location or userId is undefined"});

    let query = {
        text: 'UPDATE "User" SET profile_picture_location = $1 WHERE user_id = $2',
        values: [profilePictureLocation, userId]
    }

    executeUpdateQuery(query)
        .then(result => res.status(200).json({message: "success", rowsChanged: result}))
        .catch(e => res.status(500).json({error: e.message}))
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

module.exports = router;
