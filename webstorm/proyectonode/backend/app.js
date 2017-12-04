const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require("morgan");
const mongoose = require('mongoose');
const auth = require('./middlewares/auth');
const config = require('./config');

mongoose.Promise = global.Promise;

const users = require('./routes/users');

let app = express();
mongoose.connect('mongodb://192.168.99.100:27017/apimongo',  { useMongoClient: true });

app.use(logger("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users', users);

module.exports = app;
