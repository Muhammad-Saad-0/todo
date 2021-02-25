const TodoService = require ("./todo-service");
const todoRepository = require ("../../infrastructure/database/repository/todo");

const todoService = new TodoService(todoRepository);

module.exports =  todoService;