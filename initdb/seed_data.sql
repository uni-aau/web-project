INSERT INTO Wallet (balance)
VALUES (100.00),
       (150.00);

INSERT INTO "User" (username, firstname, lastname, email, is_admin,  password_hash, wallet_id)
VALUES ('johnDoe', 'John', 'Doe', 'john@example.com', true, '$2b$10$C8/6shgBAg45RkxyVoMbRu27jXwhL0FiwFHvdQlEUq.TWWjo.y5vi', 1),
       ('janeDoe', 'Jane', 'Doe', 'jane@example.com', false, '$2b$10$C8/6shgBAg45RkxyVoMbRu27jXwhL0FiwFHvdQlEUq.TWWjo.y5vi', 2);

INSERT INTO Station (station_name, description, station_address, longitude, latitude)
VALUES ('Central Station', 'Nice Station Description', 'Klagenfurt', 14.305278, 46.624722),
       ('North Station', 'Nice Station Description', 'Viktring', 14.262222, 46.615556);

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
VALUES ((SELECT user_id FROM "User" WHERE username = 'johnDoe'), 'Bike', (SELECT category_id FROM BikeCategory WHERE category_name = 'Mountain'), NULL, NULL, 'Booked', NOW(), NOW() + INTERVAL  '1 hour', NOW() + INTERVAL '4 hours');

INSERT INTO Transaction (ticket_id, user_id, amount, transaction_type)
VALUES (1, (SELECT user_id FROM "User" WHERE username = 'johnDoe'), 20.00, 'Rental'),
       (1, (SELECT user_id FROM "User" WHERE username = 'janeDoe'), 30.00, 'Rental');

INSERT INTO StationReview (station_id, user_id, title, model, rating, comment)
VALUES ((SELECT station_id FROM Station WHERE station_name = 'Central Station'), (SELECT user_id FROM "User" WHERE username = 'johnDoe'), 'Cool Bikestation', NULL, 5, 'Great location and plenty of bikes.'),
       ((SELECT station_id FROM Station WHERE station_name = 'North Station'), (SELECT user_id FROM "User" WHERE username = 'janeDoe'), 'Semi Cool', NULL, 4, 'Nice station but could use more electric bikes.');
