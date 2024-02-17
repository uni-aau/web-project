const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const pool = require('../pool');
const bcrypt = require('bcrypt');
require('dotenv').config();

router.post('/login', async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const userResult = await pool.query('SELECT * FROM "User" WHERE email = $1', [email]);

        if (userResult.rows.length > 0) {
            const user = userResult.rows[0];
            const isValid = await bcrypt.compare(password, user.password_hash);

            if (isValid) {
                const secret = user.is_admin ? "meinSuperGeheimesAdminJWTSecret" : "meinSuperGeheimesUserJWTSecret";

                const token = jwt.sign(
                    { userId: user.user_id, email: user.email, isAdmin: user.is_admin },
                    secret,
                    { expiresIn: '1h' }
                );

                res.status(200).json({ token: token });
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

module.exports = router;
