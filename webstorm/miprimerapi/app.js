const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require("morgan"); //para realizar el loggin de la aplicacion
const mongoose = require('mongoose');

//en un futuro lo refactorizaremos
mongoose.connect('mongodb://192.168.99.100:27017/keeper',  { useMongoClient: true });

mongoose.Promise = global.Promise;

//requerimos todos los routes
const notas = require('./routes/notas');
const users = require('./routes/users');

let app = express();

app.use(logger("dev"));//para inicializar el loggin

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/v1/users', users);
app.use('/api/v1/notas', notas);

module.exports = app;
