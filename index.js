require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser');
const db = require("./infrastructure/database/models");


const app = express();
app.use(bodyParser.json());
db.sequelize.sync();

const todoRoutes = require('./http/routes/todo-routes.js');
const authRoutes = require('./http/routes/auth-routes.js');
app.use('/', todoRoutes);
app.use('/', authRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});