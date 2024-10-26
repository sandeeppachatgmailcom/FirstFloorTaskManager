const jwt = require("jsonwebtoken");
require('dotenv').config();

const verifyAdminToken = (req, res, next) => {
    let token = req.cookies?.authToken || req.headers['authorization']?.split(' ')[1];
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
