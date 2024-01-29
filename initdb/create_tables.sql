DROP TABLE IF EXISTS BikeModelReview, StationReview, ParkingSpot, Transaction, Ticket, Bike, BikeModel, BikeCategory, Station, Wallet, "User" CASCADE;

CREATE TABLE Wallet
(
    wallet_id SERIAL PRIMARY KEY,
    balance   DECIMAL NOT NULL
);

CREATE TABLE "User"
(
    user_id       SERIAL PRIMARY KEY,
    username      VARCHAR        NOT NULL,
    email         VARCHAR UNIQUE NOT NULL,
    password_hash VARCHAR        NOT NULL,
    wallet_id     INT UNIQUE REFERENCES Wallet (wallet_id)
);

CREATE TABLE Station
(
    station_id SERIAL PRIMARY KEY,
    name       VARCHAR NOT NULL,
    location   VARCHAR NOT NULL,
    longitude  DECIMAL,
    latitude   DECIMAL
);

CREATE TABLE BikeCategory
(
    category_id SERIAL PRIMARY KEY,
    name        VARCHAR NOT NULL
);

CREATE TABLE BikeModel
(
    model_id       SERIAL PRIMARY KEY,
    category_id    INT REFERENCES BikeCategory (category_id),
    name           VARCHAR NOT NULL,
    description    TEXT,
    wheel_size     INT,
    extra_features TEXT
);

CREATE TABLE Bike
(
    bike_id      SERIAL PRIMARY KEY,
    station_id   INT REFERENCES Station (station_id),
    model_id     INT REFERENCES BikeModel (model_id),
    is_available BOOLEAN DEFAULT TRUE
);

CREATE TABLE Ticket
(
    ticket_id   SERIAL PRIMARY KEY,
    user_id     INT REFERENCES "User" (user_id),
    category_id INT REFERENCES BikeCategory (category_id),
    start_time  TIMESTAMP,
    end_time    TIMESTAMP,
    status      VARCHAR NOT NULL
);

CREATE TABLE Transaction
(
    transaction_id   SERIAL PRIMARY KEY,
    user_id          INT REFERENCES "User" (user_id),
    amount           DECIMAL NOT NULL,
    transaction_type VARCHAR NOT NULL,
    timestamp        TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE ParkingSpot
(
    spot_id     SERIAL PRIMARY KEY,
    station_id  INT REFERENCES Station (station_id),
    spot_number INT,
    category_id INT REFERENCES BikeCategory (category_id),
    CONSTRAINT unique_spot UNIQUE (station_id, spot_number)
);

CREATE TABLE StationReview
(
    review_id  SERIAL PRIMARY KEY,
    station_id INT REFERENCES Station (station_id),
    user_id    INT REFERENCES "User" (user_id),
    rating     INT,
    comment    TEXT,
    timestamp  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE BikeModelReview
(
    review_id SERIAL PRIMARY KEY,
    model_id  INT REFERENCES BikeModel (model_id),
    user_id   INT REFERENCES "User" (user_id),
    rating    INT,
    comment   TEXT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
