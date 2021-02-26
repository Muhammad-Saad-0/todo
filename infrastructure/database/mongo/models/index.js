const dbConfig = require('../../../config/db-mongo.js');
const mongoose = require('mongoose');
const mongoDBUrl = 'mongodb://127.0.0.1/todo';

mongoose.connect(mongoDBUrl, {useNewUrlParser: true, useUnifiedTopology: true});

// Get default connection
const mongoConnection = mongoose.connection;

// Bind connection to error event
mongoConnection.on('error', console.error.bind(console, 'MongoDB connectiong error:'));


const mongo = {}

mongo.mongoose = mongoose;
mongo.connection = mongoConnection;
mongo.todo = require("./todo-models.js")(mongoose)
mongo.user = require("./user-model.js")(mongoose)

module.exports =mongo;

