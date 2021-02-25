const TodoController = require('./todo-controller');
const todoService = require('../../../application/todo');

const todoController = new TodoController(todoService);

module.exports = todoController;