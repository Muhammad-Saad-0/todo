require('dotenv').config()
const server = require('../infrastructure/config/server.js');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');

app.use(bodyParser.json());
app.use(routes);


const CreateServer = () => {
    app.listen(server.PORT, () => {
        console.log(`Server is running on port 3002.`);
    });
}

exports.CreateServer = CreateServer;