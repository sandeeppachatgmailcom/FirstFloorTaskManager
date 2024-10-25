const jwt = require('jsonwebtoken');
require('dotenv').config();
const createToken = (req, res, next) => {
    try {
        const token = jwt.sign({ email: req?.body?.email }, 'secretKey', { expiresIn: '1h' });

        res.cookie('authToken', token, {
            httpOnly: true, 
            secure: process.env.NODE_ENV === 'production', 
            sameSite: 'strict',  
            maxAge: 60 * 60 * 1000  
        });

         next();
    } catch (error) {
       res.status(500).json({ error: 'Failed to create token' });
    }
};

module.exports = {createToken}
