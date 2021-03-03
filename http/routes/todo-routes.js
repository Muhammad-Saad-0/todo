const express = require('express')
const router = express.Router()
const todoController = require("../controllers/todo");
const authorization = require("../middleware/authorization")

// Retrieve one todo
router.get('/:id', todoController.selectOne.bind(todoController));

// Retrieve all todo's
router.get('/', authorization, todoController.select.bind(todoController));

// Create a new todo
router.post('/', todoController.create.bind(todoController));

// Update a todo with id
router.put('/:id', todoController.update.bind(todoController));
 
// Delete a todo with id
router.delete('/:id', todoController.delete.bind(todoController));


module.exports = router