const express = require('express')
const router = express.Router();
const todoRoutes = require('./todo-routes.js');
const authRoutes = require('./auth-routes.js');


router.use('/todo', todoRoutes);
router.use('/auth', authRoutes);

module.exports = router;