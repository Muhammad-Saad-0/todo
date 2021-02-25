const express = require('express')
const router = express.Router()
const todo = require("../controllers/todo");
const auth = require("../middleware/auth")


// Retrieve all todo's
router.get('/', todo.select.bind(todo));

// Create a new todo
router.post('/', todo.create.bind(todo));

// Update a todo with id
router.put('/:id', todo.update.bind(todo));
 
// Delete a todo with id
router.delete('/:id', todo.delete.bind(todo));


module.exports = router