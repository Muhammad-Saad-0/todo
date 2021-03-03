class TodoService {

    constructor (newTodoRepository, newTodoEntity) {
        this.todoRepository = newTodoRepository;
        this.TodoEntity = newTodoEntity;
    }

    async addNewTodo (description, startDate, endDate) {
        const todo = this.TodoEntity.createFromObject({description, startDate, endDate});
        
        const results = await this.todoRepository.create(todo);
        return results;
    }

    async getOneTodo (id) {
        const results = await this.todoRepository.fetchById(id);
        return results;
    }

    async getAllTodo (condition, limit, page) {
        const offset = ( page - 1) * limit
        const results = await this.todoRepository.fetchAll(condition, limit, offset);
        return results;
    }

    async updateTodo (data, id) {
        const { description, startDate, endDate } = data
        const todo = this.TodoEntity.createFromObject({id, description, startDate, endDate});
        const results = await this.todoRepository.update(todo);
        return results;
    }

    async deleteTodo (id) {
        try {
            const todo= await this.todoRepository.fetchById(id);
            if(!todo){
                return ("This todo doesn't exist in the database");
            }
            const results = await this.todoRepository.delete(todo);
            return results;
        } catch (error) {
            throw error;
        }
        
    }
}


module.exports = TodoService;