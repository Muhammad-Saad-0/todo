const db = require("../../models");
const TodoEntity = require('../../../../../domain/entities/todo-entity.js');
const Todo = db.todo;


class TodoRepository {

    async create(todo) {
        try {
            const results = await Todo.create(todo);
            return results;
        } catch (error) {
            throw (error);
        }
    }

    async fetchById(id){
        try {
            const todo = await Todo.findByPk(id);
            if(!todo){return null}
            return TodoEntity.createFromObject(todo);
        } catch (error) {
            throw (error);
        }
    }

    async select(conditions, limit, offset) {
        try {
            const todoObjects = await Todo.findAll({ where: conditions, limit: limit, offset: offset });
            return todoObjects.map((todo) => {
                return TodoEntity.createFromObject(todo);
            });
        }
        catch (error) {
            return error;
        }
    }

    async update(todo) {
        try {
            const results = await Todo.update(todo, { where: { id: todo.id } });
            return results;
        }
        catch (error) {
            return error;
        }
    }

    async delete(todo) {
        try {
            const results = await Todo.destroy({ where: { id: todo.id } });
            return results;
        } catch (error) {
            return error;
        }
    }
}

module.exports = TodoRepository;