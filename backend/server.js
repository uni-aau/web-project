const express = require('express');
const cors = require('cors');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);

const app = express();

app.use(express.static('public'));
app.use(cors());
app.use(express.json());

const userRoutes = require('./routes/user');
const ticketRoutes = require('./routes/ticket');
const stationRoutes = require('./routes/station');
const bikeRoutes = require('./routes/bike');
const bikeModelRoutes = require('./routes/bikeModel');
const stationReviewRoutes = require('./routes/stationReview');
const transactionRoutes = require('./routes/transaction');
const bikeModelReviewRoutes = require('./routes/bikeModelReview');
const walletRoutes = require('./routes/wallet');
const parkingSpotRoutes = require('./routes/parkingSpot');
const authRoutes = require('./routes/login')
const { verifyUserToken, verifyAdminToken } = require('./auth');


app.use('/api/auth', authRoutes);

app.use('/api/users', verifyUserToken, userRoutes);
app.use('/api/tickets', verifyUserToken,ticketRoutes);
app.use('/api/stations', verifyUserToken,stationRoutes);
app.use('/api/bikes', verifyUserToken,bikeRoutes);
app.use('/api/bikeModels', verifyUserToken,bikeModelRoutes);
app.use('/api/stationReviews',verifyUserToken, stationReviewRoutes);
app.use('/api/transactions', verifyUserToken,transactionRoutes);
app.use('/api/bikeModelReviews',verifyUserToken, bikeModelReviewRoutes);
app.use('/api/wallets',verifyUserToken, walletRoutes);
app.use('/api/parkingSpots',verifyUserToken, parkingSpotRoutes);

app.get("/", (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('Bike Rental Service API');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
