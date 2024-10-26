const jwt = require("jsonwebtoken");
require('dotenv').config();

const createAdminToken = ( email, isAdmin) => {
    try {
         
        const token = jwt.sign(
            { email, admin: isAdmin },
            process.env.JWT_SECRET || 'secretKey',  // Use environment variable for key
            { expiresIn: '1h' }
        );

        return token
         
    } catch (error) {
        res.status(500).json({ error: 'Failed to create token' });
    }
};

module.exports = createAdminToken;
