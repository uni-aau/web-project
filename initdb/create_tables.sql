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

INSERT INTO Wallet (balance)
VALUES (100.00),
       (150.00);

INSERT INTO "User" (username, firstname, lastname, email, is_admin,  password_hash, wallet_id)
VALUES ('JohnDoe', 'John', 'Doe', 'john@example.com', true, '$2b$10$C8/6shgBAg45RkxyVoMbRu27jXwhL0FiwFHvdQlEUq.TWWjo.y5vi', 1),
       ('JaneDoe', 'Jane', 'Doe', 'jane@example.com', false, '$2b$10$C8/6shgBAg45RkxyVoMbRu27jXwhL0FiwFHvdQlEUq.TWWjo.y5vi', 2);

INSERT INTO Station (station_name, description, station_address, longitude, latitude)
VALUES ('Central Station', 'Nice Station Description', 'Klagenfurt', 10.123, 20.456),
       ('North Station', 'Nice Station Description', 'Viktring', 11.789, 22.456);

INSERT INTO BikeCategory (category_name, price)
VALUES ('Mountain', 5.0),
       ('Electric', 5.0);

INSERT INTO BikeModel (name, price, category_id)
VALUES ('Mountain Pro', 5.0, (SELECT category_id FROM BikeCategory WHERE category_name = 'Mountain')),
       ('E-Bike 3000', 4.0, (SELECT category_id FROM BikeCategory WHERE category_name = 'Electric'));

INSERT INTO ParkingSpot (station_id, spot_number)
VALUES ((SELECT station_id FROM Station WHERE station_name = 'Central Station'), 1),
       ((SELECT station_id FROM Station WHERE station_name = 'Central Station'), 2);

INSERT INTO ParkingSpotCategory(spot_id, category_id)
VALUES (1, (SELECT category_id FROM BikeCategory WHERE category_name = 'Mountain')),
       (2, (SELECT category_id FROM BikeCategory WHERE category_name = 'Electric'));

INSERT INTO Bike (station_id, model_id, is_available, status, size, price)
VALUES ((SELECT station_id FROM Station WHERE station_name = 'Central Station'), (SELECT model_id FROM BikeModel WHERE name = 'Mountain Pro'), TRUE, 'Available', 20, 5.0),
       ((SELECT station_id FROM Station WHERE station_name = 'North Station'), (SELECT model_id FROM BikeModel WHERE name = 'E-Bike 3000'), TRUE, 'Rented', 30, 6.0);

INSERT INTO Ticket (user_id, booked_type, bike_id, model_id, category_id, status, booking_time, renting_start, renting_end)
VALUES ((SELECT user_id FROM "User" WHERE username = 'JohnDoe'), 'Bike', (SELECT category_id FROM BikeCategory WHERE category_name = 'Mountain'), NULL, NULL, 'Booked', NOW(), NOW() + INTERVAL  '1 hour', NOW() + INTERVAL '4 hours');

INSERT INTO Transaction (ticket_id, user_id, amount, transaction_type)
VALUES (1, (SELECT user_id FROM "User" WHERE username = 'JohnDoe'), 20.00, 'Rental'),
       (1, (SELECT user_id FROM "User" WHERE username = 'JaneDoe'), 30.00, 'Rental');

INSERT INTO StationReview (station_id, user_id, title, model, rating, comment)
VALUES ((SELECT station_id FROM Station WHERE station_name = 'Central Station'), (SELECT user_id FROM "User" WHERE username = 'JohnDoe'), 'Cool Bikestation', NULL, 5, 'Great location and plenty of bikes.'),
       ((SELECT station_id FROM Station WHERE station_name = 'North Station'), (SELECT user_id FROM "User" WHERE username = 'JaneDoe'), 'Semi Cool', NULL, 4, 'Nice station but could use more electric bikes.');
