require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser');
const passport = require('passport');
const todoRoutes = require('./routes/todo-routes');
const authRoutes = require('./routes/auth-routes.js');
const googleAuthRoutes = require('./routes/google-auth-routes.js');
const app = express();

app.use(bodyParser.json());
app.use(passport.initialize());

app.use('/', todoRoutes);
app.use('/', authRoutes);
app.use('/', googleAuthRoutes);



const CreateServer = () => {
    app.listen("3002", () => {
        console.log(`Server is running on port 3002.`);
    });
}

exports.CreateServer = CreateServer;