const server = require("../../infrastructure/config/server.js");
const TodoService = require ("./todo-service");
const RepositoryFactory = require('../../infrastructure/database/factory/repository-factory');
const TodoEntity = require('../../domain/entities/todo-entity.js');

const repositoryFactory = new RepositoryFactory();
const repository = repositoryFactory.createRepository(server.DATABASE);
const todoService = new TodoService(repository, TodoEntity);

module.exports =  todoService;