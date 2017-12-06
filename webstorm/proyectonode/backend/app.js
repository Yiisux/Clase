const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require("morgan");
const mongoose = require('mongoose');
const auth = require('./middlewares/auth');
const config = require('./config');
const cors = require('cors');

mongoose.connect('mongodb://admin:admin@ds131546.mlab.com:31546/apicampanias',  { useMongoClient: true });

mongoose.Promise = global.Promise;

const campanias = require('./routes/campania');
const users = require('./routes/users');

let app = express();


app.use(logger("dev"));
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users', users);
app.use('/campaign', campanias);

module.exports = app;
