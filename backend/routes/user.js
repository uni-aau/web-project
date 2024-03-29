const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const pool = require('../pool');
const DatabaseService = require('../database-service')
const {verifyUserToken} = require('../auth');

router.get('/userdata', verifyUserToken, function (req, res) {
    const {userId} = req.user;

    if (!userId) return res.status(500).json({error: "UserId is undefined"});

    let query = {
        text: 'SELECT "User".user_id, "User".username, "User".email, "User".firstname, "User".lastname FROM "User" WHERE "User".user_id = $1',
        values: [userId]
    }

    DatabaseService.executeSelectionQuery(query)
        .then(results => res.status(200).json(results))
        .catch(e => res.status(500).json({error: e.message}))
});

router.put('/firstname', verifyUserToken, function (req, res) {
    const {userId} = req.user;
    const {firstname} = req.body;

    if (!firstname || !userId) return res.status(500).json({
        error: "Firstname or userId is undefined",
        firstname: firstname,
        userId: userId
    });

    DatabaseService.executeUpdateQuery({
        text: 'UPDATE "User" SET firstname = $1 WHERE user_id = $2',
        values: [firstname, userId]
    })
        .then(result => res.status(200).json({success: true, rowsChanged: result}))
        .catch(e => res.status(500).json({error: e.message}))
});

router.put('/lastname', verifyUserToken, function (req, res) {
    const {userId} = req.user;
    const {lastname} = req.body;

    if (!lastname || !userId) return res.status(500).json({error: "Lastname or userId is undefined"});

    DatabaseService.executeUpdateQuery({
        text: 'UPDATE "User" SET lastname = $1 WHERE user_id = $2',
        values: [lastname, userId]
    })
        .then(result => res.status(200).json({success: true, rowsChanged: result}))
        .catch(e => res.status(500).json({error: e.message}))
});

router.put('/email', verifyUserToken, function (req, res) {
    const {userId} = req.user;
    const {email} = req.body;

    if (!email || !userId) return res.status(500).json({error: "Email or userId is undefined"});

    let query = {
        text: 'SELECT user_id FROM "User" WHERE email = $1',
        values: [email.toLowerCase()]
    }

    pool.query(query).then(result => {
        if (result.rowCount > 0) return res.status(500).json({
            exists: true,
            error: "User with this mail already exist",
            userId: result.userId
        });
        else {
            DatabaseService.executeUpdateQuery({
                text: 'UPDATE "User" SET email = $1 WHERE user_id = $2',
                values: [email.toLowerCase(), userId]
            })
                .then(result => res.status(200).json({success: true, rowsChanged: result}))
                .catch(e => res.status(500).json({error: e.message}))
        }
    }).catch(e => res.status(500).json({error: e.message}));
});

router.put('/username', verifyUserToken, function (req, res) {
    const {userId} = req.user;
    const {username} = req.body;

    if (!username || !userId) return res.status(500).json({error: "Username or userId is undefined"});

    let query = {
        text: 'SELECT user_id FROM "User" WHERE username = $1',
        values: [username.toLowerCase()]
    }

    pool.query(query).then(result => {
        if (result.rowCount > 0) return res.status(500).json({
            exists: true,
            error: "User with this username already exist",
            userId: result.userId
        });
        else {
            DatabaseService.executeUpdateQuery({
                text: 'UPDATE "User" SET username = $1 WHERE user_id = $2',
                values: [username.toLowerCase(), userId]
            })
                .then(result => res.status(200).json({success: true, rowsChanged: result}))
                .catch(e => res.status(500).json({error: e.message}))
        }
    }).catch(e => res.status(500).json({error: e.message}));
});

router.put('/profile-picture', verifyUserToken, function (req, res) {
    const {userId} = req.user;
    const {profilePictureLocation} = req.body;

    if (!profilePictureLocation || !userId) return res.status(500).json({error: "Image location or userId is undefined"});

    DatabaseService.executeUpdateQuery({
        text: 'UPDATE "User" SET profile_picture_location = $1 WHERE user_id = $2',
        values: [profilePictureLocation, userId]
    })
        .then(result => res.status(200).json({success: true, rowsChanged: result}))
        .catch(e => res.status(500).json({error: e.message}))
});

router.get('/profile-picture', verifyUserToken, function (req, res) {
    const {userId} = req.user;

    if (!userId) return res.status(500).json({error: "UserId is undefined"});

    DatabaseService.executeSelectionQuery({
        text: 'SELECT profile_picture_location FROM "User" WHERE user_id = $1',
        values: [userId]
    })
        .then(results => res.status(200).json(results))
        .catch(e => res.status(500).json({error: e.message}))
});

router.put('/password', verifyUserToken, function (req, res) {
    const {userId} = req.user;
    const {password} = req.body;

    if (!password || !userId) return res.status(500).json({error: "Password or userId is undefined"});

    bcrypt.hash(password, 10)
        .then(hashedPassword => {
            DatabaseService.executeUpdateQuery({
                text: 'UPDATE "User" SET password_hash = $1 WHERE user_id = $2',
                values: [hashedPassword, userId]
            })
                .then(result => res.status(200).json({success: true, rowsChanged: result}))
                .catch(e => res.status(500).json({error: e.message}))

        })
        .catch(e => res.status(500).json({error: e.message}));
});

module.exports = router;
