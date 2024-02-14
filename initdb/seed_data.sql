INSERT INTO Wallet (balance)
VALUES (100.00),
       (150.00);

INSERT INTO "User" (username, email, is_admin,  password_hash, wallet_id)
VALUES ('JohnDoe', 'john@example.com', true, '$2b$10$C8/6shgBAg45RkxyVoMbRu27jXwhL0FiwFHvdQlEUq.TWWjo.y5vi', 1),
       ('JaneDoe', 'jane@example.com', false, '$2b$10$C8/6shgBAg45RkxyVoMbRu27jXwhL0FiwFHvdQlEUq.TWWjo.y5vi', 2);

INSERT INTO Station (name, location, longitude, latitude)
VALUES ('Central Station', 'Central Square', 10.123, 20.456),
       ('North Station', 'North Avenue', 11.789, 22.456);

INSERT INTO BikeCategory (name)
VALUES ('Mountain'),
       ('Electric');

INSERT INTO BikeModel (category_id, name, description, wheel_size, extra_features)
VALUES ((SELECT category_id FROM BikeCategory WHERE name = 'Mountain'), 'Mountain Pro', 'A high-quality mountain bike.',
        27, 'Shimano brakes'),
       ((SELECT category_id FROM BikeCategory WHERE name = 'Electric'), 'E-Bike 3000', 'A reliable electric bike.', 26,
        'Bosch motor');

INSERT INTO Bike (station_id, model_id, is_available)
VALUES ((SELECT station_id FROM Station WHERE name = 'Central Station'),
        (SELECT model_id FROM BikeModel WHERE name = 'Mountain Pro'), TRUE),
       ((SELECT station_id FROM Station WHERE name = 'North Station'),
        (SELECT model_id FROM BikeModel WHERE name = 'E-Bike 3000'), TRUE);

INSERT INTO ParkingSpot (station_id, spot_number, category_id)
VALUES ((SELECT station_id FROM Station WHERE name = 'Central Station'), 1,
        (SELECT category_id FROM BikeCategory WHERE name = 'Mountain')),
       ((SELECT station_id FROM Station WHERE name = 'Central Station'), 2,
        (SELECT category_id FROM BikeCategory WHERE name = 'Electric'));

INSERT INTO Ticket (user_id, category_id, start_time, end_time, status)
VALUES ((SELECT user_id FROM "User" WHERE username = 'JohnDoe'),
        (SELECT category_id FROM BikeCategory WHERE name = 'Mountain'), NOW(), NOW() + INTERVAL '1 hour', 'Active'),
       ((SELECT user_id FROM "User" WHERE username = 'JaneDoe'),
        (SELECT category_id FROM BikeCategory WHERE name = 'Electric'), NOW(), NOW() + INTERVAL '2 hours', 'Active');

INSERT INTO Transaction (user_id, amount, transaction_type)
VALUES ((SELECT user_id FROM "User" WHERE username = 'JohnDoe'), 20.00, 'Rental'),
       ((SELECT user_id FROM "User" WHERE username = 'JaneDoe'), 30.00, 'Rental');

INSERT INTO StationReview (station_id, user_id, rating, comment)
VALUES ((SELECT station_id FROM Station WHERE name = 'Central Station'),
        (SELECT user_id FROM "User" WHERE username = 'JohnDoe'), 5, 'Great location and plenty of bikes.'),
       ((SELECT station_id FROM Station WHERE name = 'North Station'),
        (SELECT user_id FROM "User" WHERE username = 'JaneDoe'), 4, 'Nice station but could use more electric bikes.');

INSERT INTO BikeModelReview (model_id, user_id, rating, comment)
VALUES ((SELECT model_id FROM BikeModel WHERE name = 'Mountain Pro'),
        (SELECT user_id FROM "User" WHERE username = 'JohnDoe'), 5,
        'Fantastic mountain bike. Really enjoyed the ride.'),
       ((SELECT model_id FROM BikeModel WHERE name = 'E-Bike 3000'),
        (SELECT user_id FROM "User" WHERE username = 'JaneDoe'), 4,
        'Good e-bike, but battery life was shorter than expected.');
