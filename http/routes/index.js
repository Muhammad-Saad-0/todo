const express = require('express')
const router = express.Router();
const todoRoutes = require('./todo-routes.js');
const authRoutes = require('./auth-routes.js');


router.use('/api/v1/todos', todoRoutes);
router.use('/api/v1/auth', authRoutes);

module.exports = router;