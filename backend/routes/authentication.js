const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const pool = require('../pool');
const bcrypt = require('bcrypt');
require('dotenv').config();

router.post('/login', async (req, res, next) => {
    const { email, username, password } = req.body;

    if (!password || (!username && !email)) return res.status(500).json({ error: "Body does not contain all values" });

    const emailLower = email ? email.toLowerCase() : undefined;
    const usernameLower = username ? username.toLowerCase() : undefined;

    try {
        const userResult = await pool.query('SELECT * FROM "User" WHERE email = $1 OR username = $2', [emailLower, usernameLower]);

        if (userResult.rows.length > 0) {
            const user = userResult.rows[0];
            const isValid = await bcrypt.compare(password, user.password_hash);

            if (isValid) {
                const tokenData = {
                    userId: user.user_id,
                    email: user.email,
                    isAdmin: user.is_admin
                };

                const token = jwt.sign(
                    tokenData,
                    "meinSuperGeheimesJWTSecret",
                    { expiresIn: '1h' }
                );

                res.status(200).json({ token: token, is_admin: user.is_admin, user_id: user.user_id });
            } else {
                res.status(401).json({ message: "Invalid Password" });
            }
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (err) {
        console.error('Error while logging in:', err.stack);
        res.status(500).send('Server error while logging in');
    }
});


router.post('/register', async (req, res) => {
    const {firstname, lastname, username, email, password} = req.body;

    if (!firstname || !lastname || !username || !email || !password) return res.status(500).json({error: "Body does not contain all values"});

    const hashedPassword = await bcrypt.hash(password, 10)

    try {
        const existingUser = await pool.query('SELECT * FROM "User" WHERE username = $1 OR email = $2', [username.toLowerCase(), email.toLowerCase()]);
        if (existingUser.rows.length) {
            return res.status(400).json({exists: true, message: "User with this username or email already exists!"})
        }

        const walletResult = await pool.query('INSERT INTO Wallet (balance, available_balance) VALUES (0, 0) RETURNING *');

        const userResult = await pool.query(
            'INSERT INTO "User" (username, firstname, lastname, email, is_admin, password_hash, wallet_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [username.toLowerCase(), firstname, lastname, email.toLowerCase(), false, hashedPassword, walletResult.rows[0].wallet_id]
        );

        res.status(201).json(userResult.rows[0]);

    } catch (err) {
        console.error('Error while registering user:', err.stack);
        res.status(500).json({error: "Server error: " + err});
    }
});

router.post("/password", async (req, res) => {
    const {email, oldPassword, newPassword} = req.body;

    if (!email || !oldPassword || !newPassword) {
        return res.status(400).json({error: "Body does not contain all required values"});
    }

    try {
        const existingUserResult = await pool.query('SELECT * FROM "User" WHERE email = $1', [email.toLowerCase()]);

        if (existingUserResult.rows.length === 0) {
            return res.status(404).json({error: "Email not found"});
        }

        const existingUser = existingUserResult.rows[0];

        const isOldPasswordCorrect = await bcrypt.compare(oldPassword, existingUser.password_hash);

        if (!isOldPasswordCorrect) {
            return res.status(403).json({error: "Old password is incorrect"});
        }

        const hashedNewPassword = await bcrypt.hash(newPassword, 10);
        await pool.query('UPDATE "User" SET password_hash = $1 WHERE email = $2', [hashedNewPassword, email.toLowerCase()]);

        res.status(200).json({message: "Password successfully updated"});

    } catch (err) {
        console.error('Error while changing password:', err.stack);
        res.status(500).json({error: "Server error: " + err});
    }
});


module.exports = router;
