const Todo = require('./todo');
const todoApp = require('../../../application/todo');

const todo = new Todo(todoApp);

module.exports = todo;