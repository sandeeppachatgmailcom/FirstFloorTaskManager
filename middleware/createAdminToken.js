const jwt = require("jsonwebtoken");
require('dotenv').config();

const createAdminToken = ( email, isAdmin) => {
    try {
         
        const token = jwt.sign(
            { email, admin: isAdmin },
            process.env.JWT_SECRET || 'secretKey',  // Use environment variable for key
            { expiresIn: '1h' }
        );

        res.cookie('authToken', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 60 * 60 * 1000  
        });

        next();
    } catch (error) {
        res.status(500).json({ error: 'Failed to create token' });
    }
};

module.exports = createAdminToken;
