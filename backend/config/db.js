const mysql = require('mysql2/promise');
require('dotenv').config();

const db = mysql.createPool({
    host: 192.168.100.70,
    user: root,
    password: Ferovkenar132@,
    database: user_auth
});

module.exports = db;
