class ApplicationLayer {

    constructor (newTodoRepo) {
        console.log("In constructor of application layer")
        this.todoRepo = newTodoRepo;
    }

    async addNewTodo (description, startDate, endDate) {
        const todo = {id: uuidv4(), description: description, startDate: startDate, endDate: endDate};
        
        const results = await this.todoRepo.create(todo);
        return results;
    }

    async getAllTodo (condition) {
        console.log("I am in get all todo")
        const results = await this.todoRepo.select(condition);
        return results;
    }

    async updateTodo (data, id) {        
        const results = await this.todoRepo.update(data, id);
        return results;
    }

    async deleteTodo (id) {
        console.log(" in delete Todo of application layer")
        const results = await this.todoRepo.delete(id);
        return results;
    }
}


module.exports = ApplicationLayer;