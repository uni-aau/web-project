
-- Users table
CREATE TABLE IF NOT EXISTS Users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    password_hash VARCHAR NOT NULL,
    wallet_balance DECIMAL
);

-- Stations table
CREATE TABLE IF NOT EXISTS Stations (
    station_id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    location VARCHAR NOT NULL,
    capacity INT
);

-- Bikes table
CREATE TABLE IF NOT EXISTS Bikes (
    bike_id SERIAL PRIMARY KEY,
    station_id INT REFERENCES Stations(station_id),
    category VARCHAR NOT NULL,
    model VARCHAR NOT NULL,
    is_available BOOLEAN
);

-- Tickets table
CREATE TABLE IF NOT EXISTS Tickets (
    ticket_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users(user_id),
    bike_id INT REFERENCES Bikes(bike_id),
    start_time TIMESTAMP,
    end_time TIMESTAMP,
    status VARCHAR NOT NULL
);

-- Transactions table
CREATE TABLE IF NOT EXISTS Transactions (
    transaction_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users(user_id),
    amount DECIMAL,
    transaction_type VARCHAR NOT NULL,
    timestamp TIMESTAMP
);
