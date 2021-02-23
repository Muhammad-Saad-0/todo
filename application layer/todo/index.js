const TodoApplicationLayer = require ("./todo");
const objTodoRepositoryLayer = require ("../../repository layer/todo");

const objTodoApplicationLayer = new TodoApplicationLayer(objTodoRepositoryLayer);

module.exports =  objTodoApplicationLayer;