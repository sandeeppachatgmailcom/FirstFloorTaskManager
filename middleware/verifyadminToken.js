const jwt = require("jsonwebtoken");
require('dotenv').config();

const verifyAdminToken = (req, res, next) => {
    const token = req?.cookies?.authToken;
    console.log('verify token')
    if (!token) {
        return res.status(401).json({ success: false, message: 'No token provided.' });
    }
    try {
        const decoded = jwt.verify(token, 'secretKey');
        if (!decoded.admin) {
            return res.status(403).json({ success: false, message: 'No admin authority.' });
        }
        req.user = decoded;
        next();
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to verify token.' });
    }
};

module.exports = verifyAdminToken;
