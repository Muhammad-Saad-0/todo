const express = require('express')
const router = express.Router()
const todoController = require("../controllers/todo");
const authenticate = require("../middleware/authorization")


// Retrieve all todo's
router.get('/', authenticate, todoController.select.bind(todoController));

// Create a new todo
router.post('/', authenticate, todoController.create.bind(todoController));

// Update a todo with id
router.put('/:id', authenticate, todoController.update.bind(todoController));
 
// Delete a todo with id
router.delete('/:id', authenticate, todoController.delete.bind(todoController));


module.exports = router