class TodoService {

    constructor (newTodoRepository) {
        console.log("In constructor of application layer")
        this.todoRepository = newTodoRepository;
    }

    async addNewTodo (description, startDate, endDate) {
        const todo = {id: uuidv4(), description: description, startDate: startDate, endDate: endDate};
        
        const results = await this.todoRepository.create(todo);
        return results;
    }

    async getAllTodo (condition) {
        console.log("I am in get all todo")
        const results = await this.todoRepository.select(condition);
        return results;
    }

    async updateTodo (data, id) {        
        const results = await this.todoRepository.update(data, id);
        return results;
    }

    async deleteTodo (id) {
        console.log(" in delete Todo of application layer")
        const results = await this.todoRepository.delete(id);
        return results;
    }
}


module.exports = TodoService;