const db = require("../../models");
const TodoEntity = require('../../../../../domain/entities/todo-entity.js');
const Todo = db.todo;

class TodoRepository {

    async create (todo){
        try{
            const results = await Todo.create(todo);
            return results;
        }
        catch (error){
            throw error;
        }
    }

    async fetchAll (condition) {
        try {
            const todoObjects =  await Todo.find().lean();
            return todoObjects.map((todo) => {
                return TodoEntity.createFromObject(todo);
            });
            
        } catch (error) {
            throw error;
        }
    }

    async update (todo) {
        try {
            const results = await Todo.update({_id: todo.id}, todo);
            return results;
        } catch (error) {
            throw error;
        }
    }

    async delete (todo) {
        try {
            const results = await Todo.deleteOne({_id: todo.id});
            return results;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = TodoRepository;