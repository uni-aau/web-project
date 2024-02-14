// auth.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyUserToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, "meinSuperGeheimesUserJWTSecret", (err, user) => {
        if (err) return res.sendStatus(403);
        if (user.isAdmin === true) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

const verifyAdminToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, "meinSuperGeheimesAdminJWTSecret", (err, admin) => {
        if (err) return res.sendStatus(403);
        if (!admin.isAdmin) return res.sendStatus(403);
        req.user = admin;
        next();
    });
};

module.exports = { verifyUserToken, verifyAdminToken };
