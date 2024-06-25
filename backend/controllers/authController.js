const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({ username, email, password: hashedPassword });
        res.redirect('/login');
    } catch (error) {
        res.status(500).send('Erro no servidor');
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const [user] = await User.findByEmail(email);
        
        if (user && await bcrypt.compare(password, user.password)) {
            // Redirecionar para a página home
            res.redirect('/home');
        }
    }
};
