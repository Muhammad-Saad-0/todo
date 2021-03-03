require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();
const routes = require('./routes');

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(routes);


const CreateServer = () => {
    app.listen("3002", () => {
        console.log(`Server is running on port 3002.`);
    });
}

exports.CreateServer = CreateServer;