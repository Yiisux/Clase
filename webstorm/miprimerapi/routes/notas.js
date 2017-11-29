const express = require('express');
const notasController = require('../controller/notas');
let router = express.Router();

/*router.get('/', (req, res) => {
    res.status(200).json([{titulo: 'Saludos invocador', descripcion: 'Hola mundo'}]);
});
*/

router.get('/', notasController.findAllNotas);
router.get('/:id', notasController.findById);
router.post('/', notasController.addNota);
router.put('/:id', notasController.editNota);
router.delete('/:id', notasController.deleteNota);
module.exports = router;