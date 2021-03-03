const db = require("../../models");
const TodoEntity = require('../../../../../domain/entities/todo-entity.js');
const Todo = db.todo;


class TodoRepository {

    async create(data) {
        try {
            const results = await Todo.create(data)
            return results;
        } catch (error) {
            return error;
        }
    }

    async select(condition) {
        try {
            // const results = await Todo.findAll({ where: condition, limit: limit, offset: offset});
            const results = await Todo.findAll({ where: condition });
            console.log(results);
            return results;
        }
        catch (error) {
            return error;
        }
    }

    async update(data, id) {
        try {
            const results = await Todo.update(data, { where: { id: id } });
            return results;
        }
        catch (error) {
            return error;
        }
    }

    async delete(id) {
        try {
            const results = await Todo.destroy({ where: { id: id } });
            return results;
        } catch (error) {
            return error;
        }
    }
}

module.exports = TodoRepository;