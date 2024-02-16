DROP TABLE IF EXISTS BikeModelReview, StationReview, ParkingSpot, Transaction, Ticket, Bike, BikeModel, BikeCategory, Station, Wallet, "User" CASCADE;

CREATE TABLE Wallet
(
    wallet_id SERIAL PRIMARY KEY,
    balance   DECIMAL NOT NULL
);

CREATE TABLE "User"
(
    user_id       SERIAL PRIMARY KEY,
    username      VARCHAR UNIQUE NOT NULL,
    firstname     VARCHAR        NOT NULL,
    lastname      VARCHAR        NOT NULL,
    email         VARCHAR UNIQUE NOT NULL,
    is_admin      BOOLEAN        NOT NULL,
    password_hash VARCHAR        NOT NULL,
    wallet_id     INT UNIQUE REFERENCES Wallet (wallet_id),
    profile_picture_location VARCHAR
);

CREATE TABLE Station
(
    station_id             SERIAL PRIMARY KEY,
    station_name           VARCHAR NOT NULL,
    description            VARCHAR,
    station_address        VARCHAR NOT NULL,
    longitude              DECIMAL,
    latitude               DECIMAL,
    station_image_location VARCHAR
);

-- TODO enum for status
CREATE TABLE BikeCategory
(
    category_id SERIAL PRIMARY KEY,
    name        VARCHAR NOT NULL,
    price       FLOAT,
    status      VARCHAR
);

-- TODO enum
CREATE TABLE BikeModel
(
    model_id    SERIAL PRIMARY KEY,
    name        VARCHAR NOT NULL,
    price       FLOAT,
    status      VARCHAR,
    category_id INT REFERENCES BikeCategory (category_id),
);

-- TODO enum + mehrere kategorien, also extra table
CREATE TABLE Bike
(
    bike_id      SERIAL PRIMARY KEY,
    station_id   INT REFERENCES Station (station_id),
    model_id     INT REFERENCES BikeModel (model_id),
    is_available BOOLEAN DEFAULT TRUE,
    status VARCHAR,
    size INT NOT NULL,
    price FLOAT,
    bike_image_location VARCHAR
);

-- TODO
CREATE TABLE Ticket
(
    ticket_id   SERIAL PRIMARY KEY,
    user_id     INT REFERENCES "User" (user_id),
    category_id INT REFERENCES BikeCategory (category_id),
    start_time  TIMESTAMP,
    end_time    TIMESTAMP,
    status      VARCHAR NOT NULL
);

-- // TODO
CREATE TABLE Transaction
(
    transaction_id   SERIAL PRIMARY KEY,
    user_id          INT REFERENCES "User" (user_id),
    amount           DECIMAL NOT NULL,
    transaction_type VARCHAR NOT NULL,
    timestamp        TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- // TODO one or mult categories -> extra relation
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
    title      VARCHAR NOT NULL,
    model      INT REFERENCES BikeModel (model_id),
    rating     INT,
    comment    TEXT,
    timestamp  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);