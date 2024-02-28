DROP TABLE IF EXISTS BikeModelReview, StationReview, ParkingSpot, ParkingSpotCategory, Rentals, Transaction, Ticket, Bike, BikeModel, BikeCategory, Station, Wallet, "User" CASCADE;
DROP TYPE IF EXISTS bike_status, booked_type, booking_status;


CREATE TYPE bike_status AS ENUM ('Available', 'Booked', 'Rented', 'Maintenance'); -- ENUM will be checked in bike component
CREATE TYPE booked_type AS ENUM ('Bike', 'Model', 'Category');
CREATE TYPE booking_status AS ENUM ('Booked', 'Rented', 'Overdue', 'Canceled', 'NotTaken', 'Completed');

CREATE TABLE Wallet
(
    wallet_id         SERIAL PRIMARY KEY,
    balance           DECIMAL NOT NULL,
    available_balance DECIMAL NOT NULL
);

CREATE TABLE "User"
(
    user_id                    SERIAL PRIMARY KEY,
    username                   VARCHAR(100) UNIQUE        NOT NULL,
    firstname                  VARCHAR(100)               NOT NULL,
    lastname                   VARCHAR(100)               NOT NULL,
    email                      VARCHAR(100) UNIQUE        NOT NULL,
    is_admin                   BOOLEAN                    NOT NULL,
    password_hash              VARCHAR(500)               NOT NULL,
    has_connected_bank_account BOOLEAN      DEFAULT FALSE NOT NULL,
    wallet_id                  INT UNIQUE                 NOT NULL REFERENCES Wallet (wallet_id),
    profile_picture_location   VARCHAR(500) DEFAULT '/assets/no-image.svg'
);

CREATE TABLE Station
(
    station_id             SERIAL PRIMARY KEY,
    station_name           VARCHAR(100) NOT NULL,
    description            VARCHAR,
    station_address        VARCHAR(200) NOT NULL,
    longitude              DECIMAL,
    latitude               DECIMAL,
    station_image_location VARCHAR(500) DEFAULT '/assets/no-image.svg'
);

CREATE TABLE BikeCategory
(
    category_id   SERIAL PRIMARY KEY,
    category_name VARCHAR NOT NULL,
    price         FLOAT   NOT NULL
);

CREATE TABLE BikeModel
(
    model_id    SERIAL PRIMARY KEY,
    model_name  VARCHAR(100) NOT NULL,
    price       FLOAT        NOT NULL,
    category_id INT          NOT NULL REFERENCES BikeCategory (category_id)
);

CREATE TABLE ParkingSpot
(
    spot_id     SERIAL PRIMARY KEY,
    station_id  INT NOT NULL REFERENCES Station (station_id),
    spot_number INT NOT NULL,
    CONSTRAINT unique_spot UNIQUE (station_id, spot_number)
);

CREATE TABLE ParkingSpotCategory
(
    spot_id     INT NOT NULL,
    category_id INT NOT NULL,
    PRIMARY KEY (spot_id, category_id),
    FOREIGN KEY (spot_id) REFERENCES ParkingSpot (spot_id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES BikeCategory (category_id) ON DELETE CASCADE
);

CREATE TABLE Bike
(
    bike_id             SERIAL PRIMARY KEY,
    bike_name           VARCHAR(100) NOT NULL,
    station_id          INT REFERENCES Station (station_id),
    model_id            INT          NOT NULL REFERENCES BikeModel (model_id),
    assigned_to         INT REFERENCES ParkingSpot (spot_id),
    is_available        BOOLEAN      DEFAULT TRUE,
    status              bike_status  NOT NULL,
    size                INT          NOT NULL,
    price               FLOAT        NOT NULL,
    bike_image_location VARCHAR(500) DEFAULT '/assets/no-image.svg'
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
    renting_end   TIMESTAMP      NOT NULL,
    price         DECIMAL        NOT NULL
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
    amount           DECIMAL      NOT NULL,
    transaction_type VARCHAR(100) NOT NULL,
    timestamp        TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE StationReview
(
    review_id  SERIAL PRIMARY KEY,
    station_id INT          NOT NULL REFERENCES Station (station_id) ON DELETE CASCADE,
    user_id    INT          NOT NULL REFERENCES "User" (user_id) ON DELETE CASCADE,
    title      VARCHAR(200) NOT NULL,
    model_id   INT REFERENCES BikeModel (model_id) ON DELETE CASCADE,
    rating     INT          NOT NULL,
    comment    TEXT         NOT NULL,
    timestamp  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO Wallet (balance, available_balance)
VALUES (100.00, 100.00),
       (150.00, 100.00),
       (100.00, 10.00),
       (1000.00, 1000.00);

INSERT INTO "User" (username, firstname, lastname, email, is_admin, password_hash, wallet_id)
VALUES ('johnDoe', 'John', 'Doe', 'john@example.com', true,
        '$2b$10$C8/6shgBAg45RkxyVoMbRu27jXwhL0FiwFHvdQlEUq.TWWjo.y5vi', 1),
       ('janeDoe', 'Jane', 'Doe', 'jane@example.com', false,
        '$2b$10$C8/6shgBAg45RkxyVoMbRu27jXwhL0FiwFHvdQlEUq.TWWjo.y5vi', 2),
       ('dadi', 'Dado', 'Dodo', 'dadi1@speed.at', true, '$2b$10$tV2RaIco6XYHRPnGZwtZX.ClQEtsfsnkRakXqPu7WRIBkTzx1ykxm',
        3),
       ('dad', 'Dado', 'Dodo', 'dadi2@speed.at', false, '$2b$10$tV2RaIco6XYHRPnGZwtZX.ClQEtsfsnkRakXqPu7WRIBkTzx1ykxm',
        4);

INSERT INTO Station (station_name, description, station_address, longitude, latitude, station_image_location)
VALUES ('Central Station', 'Nice Station Description', 'Klagenfurt', 14.305278, 46.624722, '/assets/central-station.png'),
       ('North Station', 'Nice Station Description', 'Viktring', 14.262222, 46.615556, '/assets/north-station.png');

INSERT INTO BikeCategory (category_name, price)
VALUES ('Mountain', 5.0),
       ('Electric', 5.0);

INSERT INTO BikeModel (model_name, price, category_id)
VALUES ('Mountain Pro', 5.0, (SELECT category_id FROM BikeCategory WHERE category_name = 'Mountain')),
       ('E-Bike 3000', 4.0, (SELECT category_id FROM BikeCategory WHERE category_name = 'Electric'));

INSERT INTO ParkingSpot (station_id, spot_number)
VALUES ((SELECT station_id FROM Station WHERE station_name = 'Central Station'), 1),
       ((SELECT station_id FROM Station WHERE station_name = 'Central Station'), 2),
       ((SELECT station_id FROM Station WHERE station_name = 'Central Station'), 3),
       ((SELECT station_id FROM Station WHERE station_name = 'Central Station'), 4),
       ((SELECT station_id FROM Station WHERE station_name = 'North Station'), 1),
       ((SELECT station_id FROM Station WHERE station_name = 'North Station'), 2);

INSERT INTO ParkingSpotCategory(spot_id, category_id)
VALUES (1, (SELECT category_id FROM BikeCategory WHERE category_name = 'Mountain')),
       (1, (SELECT category_id FROM BikeCategory WHERE category_name = 'Electric')),
       (2, (SELECT category_id FROM BikeCategory WHERE category_name = 'Electric')),
       (2, (SELECT category_id FROM BikeCategory WHERE category_name = 'Mountain')),
       (3, (SELECT category_id FROM BikeCategory WHERE category_name = 'Electric')),
       (4, (SELECT category_id FROM BikeCategory WHERE category_name = 'Electric')),
       (4, (SELECT category_id FROM BikeCategory WHERE category_name = 'Mountain')),
       (5, (SELECT category_id FROM BikeCategory WHERE category_name = 'Mountain')),
       (6, (SELECT category_id FROM BikeCategory WHERE category_name = 'Electric'));

INSERT INTO Bike (station_id, bike_name, assigned_to, model_id, is_available, status, size, price)
VALUES ((SELECT station_id FROM Station WHERE station_name = 'Central Station'), 'Mountain-Bike 300', 1,
        (SELECT model_id FROM BikeModel WHERE model_name = 'Mountain Pro'), TRUE, 'Available', 20, 5.0),
       ((SELECT station_id FROM Station WHERE station_name = 'Central Station'), 'E-Bike 12h', 2,
        (SELECT model_id FROM BikeModel WHERE model_name = 'E-Bike 3000'), TRUE, 'Rented', 30, 6.0);

INSERT INTO Ticket (user_id, booked_type, bike_id, model_id, category_id, status, booking_time, renting_start,
                    renting_end, price)
VALUES (2, 'Bike', 1, 1, 1, 'Booked', '2024-02-22 19:45:51.332626', '2024-02-22 20:45:51.332626',
        '2024-02-22 23:45:51.332626', 5);

INSERT INTO Ticket (user_id, booked_type, bike_id, model_id, category_id, status, booking_time, renting_start,
                    renting_end, price)
VALUES (2, 'Bike', 1, 1, 1, 'Rented', '2024-02-22 19:46:31.036000', '2024-02-22 20:46:00.000000',
        '2024-02-22 21:46:00.000000', 5);

INSERT INTO Ticket (user_id, booked_type, bike_id, model_id, category_id, status, booking_time, renting_start,
                    renting_end, price)
VALUES (2, 'Bike', 1, 1, 1, 'Completed', '2024-02-22 19:47:08.618000', '2024-02-22 20:47:00.000000',
        '2024-02-22 21:47:00.000000', 5);



INSERT INTO Transaction (ticket_id, user_id, amount, transaction_type)
VALUES (1, (SELECT user_id FROM "User" WHERE username = 'johnDoe'), 20.00, 'Rental'),
       (1, (SELECT user_id FROM "User" WHERE username = 'janeDoe'), 30.00, 'Rental');

INSERT INTO StationReview (station_id, user_id, title, model_id, rating, comment)
VALUES ((SELECT station_id FROM Station WHERE station_name = 'Central Station'),
        (SELECT user_id FROM "User" WHERE username = 'johnDoe'), 'Cool Bikestation', NULL, 5,
        'Great location and plenty of bikes.'),
       ((SELECT station_id FROM Station WHERE station_name = 'North Station'),
        (SELECT user_id FROM "User" WHERE username = 'janeDoe'), 'Semi Cool', NULL, 4,
        'Nice station but could use more electric bikes.');
