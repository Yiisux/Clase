const express = require('express');
const userController = require('../controller/users');
const auth = require('../middlewares/auth');
let router = express.Router();


router.post('/auth/register', userController.signUp);
router.post('/auth/login', userController.signIn);
router.get('/auth/list', userController.list);
module.exports = router;
