const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let aportacionSchema = new Schema({
    cantidad: string,
    categoria: [{type: Schema.ObjectId, ref: 'Categoria'}],
    campania: [{type: Schema.ObjectId, ref: 'Campania'}],
    usuario: [{type: Schema.ObjectId, ref: 'Usuario'}]

});



module.exports = mongoose.model('Aportacion', aportacionSchema);