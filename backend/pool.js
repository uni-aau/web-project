const { Pool } = require('pg');

let cfg = require('./config.json')

let pool = new Pool({
    user: cfg.database.user, // TODO create Database
    host: cfg.database.host,
    database: cfg.database.db,
    password: cfg.database.password,
    port: 5000,
});

module.exports = pool;