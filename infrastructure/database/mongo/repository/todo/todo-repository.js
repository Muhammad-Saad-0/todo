const db = require("../../models");
const TodoEntity = require('../../../../../domain/entities/todo-entity.js');
const Todo = db.todo;

class TodoRepository {

    async create (data){
        try{
            console.log(data);
            console.log("I am in mongo create");
            const results = await Todo.create(data);
            return results;
        }
        catch (error){
            throw error;
        }
    }

    async select (condition) {
        try {
            const todoObjects =  await Todo.find().lean();
            return todoObjects.map((todo) => {
                return TodoEntity.createFromObject(todo);
            });
            
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