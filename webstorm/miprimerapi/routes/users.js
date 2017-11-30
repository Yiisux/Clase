const express = require('express');
const userController = require('../controller/users');
let router = express.Router();
/*
router.get('/', function(req, res, next) {
  res.json({users: [{name: 'Timmy'}]});
});*/
router.post('/register', userController.singUp);
router.post('/login', userController.singIn);
module.exports = router;
