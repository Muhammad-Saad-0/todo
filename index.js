require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser');
const db = require("./models");


const app = express();
app.use(bodyParser.json());
db.sequelize.sync();

const todo = require('./routes/todo.js');
app.use('/', todo);

// set port, listen for requests
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});