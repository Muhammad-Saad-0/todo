class TodoService {

    constructor (newTodoRepository) {
        this.todoRepository = newTodoRepository;
        this.id = 22;
    }

    async addNewTodo (description, startDate, endDate) {
        this.id +=1;
        const todo = {id: this.id, description: description, startDate: startDate, endDate: endDate};
        
        const results = await this.todoRepository.create(todo);
        return results;
    }

    async getAllTodo (condition) {
        console.log("in getAllTodo");
        const results = await this.todoRepository.select(condition);
        return results;
    }

    async updateTodo (data, id) {
        console.log("in updateTodo");        
        const results = await this.todoRepository.update(data, id);
        return results;
    }

    async deleteTodo (id) {
        console.log("in deleteTodo")
        const results = await this.todoRepository.delete(id);
        return results;
    }
}


module.exports = TodoService;