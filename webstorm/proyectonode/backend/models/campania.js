const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let campaniaSchema = new Schema({
    nombre: String,
    causa: String,
    clave: String,
    aportacion: [{type: Schema.ObjectId, ref: 'Aportacion'}],
    categoria: [{type: Schema.ObjectId, ref: 'Categoria'}],
    usuarios: [{type: Schema.ObjectId, ref: 'Usuario'}]
});





module.exports = mongoose.model('Campania', campaniaSchema);