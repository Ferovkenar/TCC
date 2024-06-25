const db = require('../config/db');

class User {
    static async create({ username, email, password }) {
        const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
        return db.execute(query, [username, email, password]);
    }

    static async findByEmail(email) {
        const query = 'SELECT * FROM users WHERE email = ?';
        const [rows] = await db.execute(query, [email]);
        return rows;
    }

module.exports = User;
