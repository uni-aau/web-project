const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const pool = require('../pool');

router.get('/:userId', async (req, res) => {
    const { userId } = req.params;

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
    const { userId } = req.params;
    const { balance } = req.body;

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

module.exports = router;
