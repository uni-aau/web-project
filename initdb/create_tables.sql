DROP TABLE IF EXISTS BikeModelReview, StationReview, ParkingSpot, ParkingSpotCategory, Rentals, Transaction, Ticket, Bike, BikeModel, BikeCategory, Station, Wallet, "User" CASCADE;
DROP TYPE IF EXISTS bike_status, booked_type, booking_status;

CREATE TYPE bike_status AS ENUM ('Available', 'Booked', 'Rented', 'Maintenance');
CREATE TYPE booked_type AS ENUM ('Bike', 'Model', 'Category');
CREATE TYPE booking_status AS ENUM ('Booked', 'Rented', 'Overdue', 'Canceled', 'NotTaken');

CREATE TABLE Wallet
(
    wallet_id SERIAL PRIMARY KEY,
    balance   DECIMAL NOT NULL
);

CREATE TABLE "User"
(
    user_id                  SERIAL PRIMARY KEY,
    username                 VARCHAR UNIQUE NOT NULL,
    firstname                VARCHAR        NOT NULL,
    lastname                 VARCHAR        NOT NULL,
    email                    VARCHAR UNIQUE NOT NULL,
    is_admin                 BOOLEAN        NOT NULL,
    password_hash            VARCHAR        NOT NULL,
    wallet_id                INT UNIQUE REFERENCES Wallet (wallet_id),
    profile_picture_location VARCHAR DEFAULT '/assets/no-image.svg'
);

CREATE TABLE Station
(
    station_id             SERIAL PRIMARY KEY,
    station_name           VARCHAR NOT NULL,
    description            VARCHAR,
    station_address        VARCHAR NOT NULL,
    longitude              DECIMAL,
    latitude               DECIMAL,
    station_image_location VARCHAR DEFAULT '/assets/no-image.svg'
);

-- TODO enum for status?
CREATE TABLE BikeCategory
(
    category_id SERIAL PRIMARY KEY,
    category_name        VARCHAR NOT NULL,
    price       FLOAT,
    status      VARCHAR
);

-- TODO enum?
CREATE TABLE BikeModel
(
    model_id    SERIAL PRIMARY KEY,
    name        VARCHAR NOT NULL,
    price       FLOAT,
    status      VARCHAR,
    category_id INT REFERENCES BikeCategory (category_id)
);

CREATE TABLE ParkingSpot
(
    spot_id     SERIAL PRIMARY KEY,
    station_id  INT REFERENCES Station (station_id),
    spot_number INT,
    CONSTRAINT unique_spot UNIQUE (station_id, spot_number)
);

CREATE TABLE ParkingSpotCategory
(
    spot_id     INT,
    category_id INT,
    PRIMARY KEY (spot_id, category_id),
    FOREIGN KEY (spot_id) REFERENCES ParkingSpot (spot_id),
    FOREIGN KEY (category_id) REFERENCES BikeCategory (category_id)
);

CREATE TABLE Bike
(
    bike_id             SERIAL PRIMARY KEY,
    station_id          INT REFERENCES Station (station_id),
    model_id            INT REFERENCES BikeModel (model_id),
    assigned_to         INT REFERENCES ParkingSpot (spot_id),
    is_available        BOOLEAN DEFAULT TRUE,
    status              bike_status NOT NULL,
    size                INT         NOT NULL,
    price               FLOAT,
    bike_image_location VARCHAR DEFAULT '/assets/no-image.svg'
);

-- TODO
CREATE TABLE Ticket
(
    ticket_id     SERIAL PRIMARY KEY,
    user_id       INT REFERENCES "User" (user_id),
    booked_type   booked_type    NOT NULL,
    bike_id       INT REFERENCES Bike (bike_id),
    model_id      INT REFERENCES BikeModel (model_id),
    category_id   INT REFERENCES BikeCategory (category_id),
    status        booking_status NOT NULL,
    booking_time  TIMESTAMP      NOT NULL,
    renting_start TIMESTAMP      NOT NULL,
    renting_end   TIMESTAMP      NOT NULL
);

CREATE TABLE Rentals
(
    rentals_id SERIAL PRIMARY KEY,
    user_id    INT REFERENCES "User" (user_id),
    bike_id    INT REFERENCES Bike (bike_id),
    ticket_id  INT REFERENCES Ticket (ticket_id)
);

CREATE TABLE Transaction
(
    transaction_id   SERIAL PRIMARY KEY,
    ticket_id        INT REFERENCES Ticket (ticket_id),
    user_id          INT REFERENCES "User" (user_id),
    amount           DECIMAL NOT NULL,
    transaction_type VARCHAR NOT NULL,
    timestamp        TIMESTAMP DEFAULT CURRENT_TIMESTAMP
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