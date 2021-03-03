const server = require("../../infrastructure/config/server.js");
const TodoService = require ("./todo-service");
const RepositoryFactory = require('./repository-factory');

const repositoryFactory = new RepositoryFactory();
const repository = repositoryFactory.createRepository(server.DATABASE);
const todoService = new TodoService(repository);

module.exports =  todoService;