const TodoController = require('./todo');
const objTodoApplicationLayer = require('../../application layer/todo');

const objTodoController = new TodoController(objTodoApplicationLayer);

module.exports = objTodoController;