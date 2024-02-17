const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const pool = require('../pool');
const bcrypt = require('bcrypt');
require('dotenv').config();

router.post('/login', async (req, res, next) => {
    const {email, password} = req.body;

    try {
        const userResult = await pool.query('SELECT * FROM "User" WHERE email = $1', [email]);

        if (userResult.rows.length > 0) {
            const user = userResult.rows[0];
            const isValid = await bcrypt.compare(password, user.password_hash);

            if (isValid) {
                const secret = user.is_admin ? "meinSuperGeheimesAdminJWTSecret" : "meinSuperGeheimesUserJWTSecret";

                const token = jwt.sign(
                    {userId: user.user_id, email: user.email, isAdmin: user.is_admin},
                    secret,
                    {expiresIn: '1h'}
                );

                res.status(200).json({token: token});
            } else {
                res.status(401).json({message: "Invalid Password"});
            }
        } else {
            res.status(404).json({message: "User not found"});
        }
    } catch (err) {
        console.error('Error while logging in:', err.stack);
        res.status(500).send('Server error while logging in');
    }
});

router.post('/register', async (req, res) => {
    const {firstname, lastname, username, email, password} = req.body;

    if (!firstname || !lastname || !username || !email || !password) return res.status(500).json({error: "Body does not contain all values"});

    console.log(req.body);

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const existingUser = await pool.query('SELECT * FROM "User" WHERE username = $1 OR email = $2', [username, email]);
        if (existingUser.rows.length) {
            return res.status(400).json({exists: true, message: "User with this username or email already exists!"})
        }

        const walletResult = await pool.query('INSERT INTO Wallet (balance) VALUES (0) RETURNING *');

        const userResult = await pool.query(
            'INSERT INTO "User" (username, firstname, lastname, email, is_admin, password_hash, wallet_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [username, firstname, lastname, email, false, hashedPassword, walletResult.rows[0].wallet_id]
        );

        res.status(201).json(userResult.rows[0]);

    } catch (err) {
        console.error('Error while registering user:', err.stack);
        res.status(500).json({error: "Server error: " + err});
    }
});

module.exports = router;
