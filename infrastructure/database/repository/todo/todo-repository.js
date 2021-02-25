const db = require("../../models");
const Todo = db.todo;


class TodoRepository {

    async create (data) {
        try {
            const results = await Todo.create(data)
            return results;    
        } catch (error) {
            return error;
        }
    }

    async select (condition) {
        try {
            const results = await Todo.findAll({ where: condition });
            return results;   
        } 
        catch (error) {
            return error;
        }
    }

    async update (data, id) {
        try {
            const results = await Todo.update(data, {where: { id: id }});
            return results;   
        } 
        catch (error) {
            return error;
        }
    }

    async delete (id) {
        try {
            const results = await Todo.destroy({where: { id: id }});
            return results;    
        } catch (error) {
            return error;
        }
    }
}

module.exports = TodoRepository;