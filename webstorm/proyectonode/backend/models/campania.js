const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let campaniaSchema = new Schema({
    nombre: String,
    causa: String,
    clave: String,
    categoria: [{type: Schema.ObjectId, ref: 'Categoria'}],
});

module.exports = mongoose.model('Campania', campaniaSchema);