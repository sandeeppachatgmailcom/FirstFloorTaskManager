const express = require('express');
const error404 = require('../controller/error404');
const postMakeUserOnOff = require('../controller/admin/postMakeUserOnOff');
const postValidateUser = require('../controller/admin/postValidateUser');
const postCreateUser = require('../controller/user/postCreateUser');
const router = express.Router();
 

router.post('/makeUserOnOff',postMakeUserOnOff)
router.post('/validateuUer',postValidateUser)


// Handling undefined API endpoints
router.use(error404);

module.exports = router;
