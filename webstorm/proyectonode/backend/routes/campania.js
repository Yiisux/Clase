const express = require('express');
const campaniaController = require('../controller/campania');
let router = express.Router();

router.get('/list', campaniaController.findAllCampanias);
router.get('/:id', campaniaController.findById);
router.post('/unirse', campaniaController.addUsuario);
module.exports = router;