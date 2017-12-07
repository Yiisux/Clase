const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let cateogiraSchema = new Schema({
    nombre: string,
});

module.exports = mongoose.model('Categoria', cateogiraSchema);