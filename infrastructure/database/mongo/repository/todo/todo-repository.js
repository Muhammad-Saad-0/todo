const db = require("../../models");
const Todo = db.todo;

class TodoRepository {

    async create (data){
        try{
            const results = await Todo.create(data);
            return results;
        }
        catch (error){
            throw error;
        }
    }

    async select (condition) {
        try {
            const results = Todo.find().lean();
            return results;
        } catch (error) {
            throw error;
        }
    }

    async update (id, data) {
        try {
            const results = await Todo.update({_id: id}, data);
            return results;
        } catch (error) {
            throw error;
        }
    }

    async delete (id) {
        try {
            const results = Todo.deleteOne({_id: id});
            return results;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = TodoRepository;