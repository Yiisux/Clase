const express = require('express');
const userController = require('../controller/users');
const auth = require('../middlewares/auth');
let router = express.Router();


router.post('/auth/register', userController.signUp);
module.exports = router;
