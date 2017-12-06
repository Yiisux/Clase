const express = require('express');
const campaniaController = require('../controller/campania');
let router = express.Router();

router.get('/list', campaniaController.findAllCampanias);
router.get('/:id', campaniaController.findOne);
router.post('/join', campaniaController.addUsuario);
module.exports = router;