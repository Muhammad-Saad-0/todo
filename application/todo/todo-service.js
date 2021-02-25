class TodoService {

    constructor (newTodoRepository) {
        this.todoRepository = newTodoRepository;
    }

    async addNewTodo (description, startDate, endDate) {
        const todo = {id: uuidv4(), description: description, startDate: startDate, endDate: endDate};
        
        const results = await this.todoRepository.create(todo);
        return results;
    }

    async getAllTodo (condition, limit, offset) {
        const results = await this.todoRepository.select(condition, limit, offset);
        return results;
    }

    async updateTodo (data, id) {        
        const results = await this.todoRepository.update(data, id);
        return results;
    }

    async deleteTodo (id) {
        const results = await this.todoRepository.delete(id);
        return results;
    }
}


module.exports = TodoService;