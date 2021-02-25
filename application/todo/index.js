const Todo = require ("./todo");
const todoService = require ("../../infrastructure/database/repository/todo");

const todo = new Todo(todoService);

module.exports =  todo;