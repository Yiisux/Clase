const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let notaSchema = new Schema({
    titulo: String,
    descripcion: String,

});

//aqui podriamos añadirle métodos

module.exports = mongoose.model('Nota', notaSchema);