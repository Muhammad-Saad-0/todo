class ApplicationLayer {

    constructor (newObjTodoRepositoryLayer) {
        this.objTodoRepositoryLayer = newObjTodoRepositoryLayer;
    }


    async addNewTodo (req) {
        const { description, startDate, endDate } = req.body;
        const todo = {id: uuidv4(), description: description, startDate: startDate, endDate: endDate};
        
        const results = await this.objTodoRepositoryLayer.create(todo);
        return results;
    }

    async getAllTodo (req) {
        var condition =  null;

        const results = await this.objTodoRepositoryLayer.select(condition);
        return results;
    }

    async updateTodo (req) {
        const data = req.body;
        const id = req.params.id;
        
        const results = await this.objTodoRepositoryLayer.update(data, id);
        return results;
    }

    async deleteTodo (req) {
        const id = req.params.id;

        const results = await this.objTodoRepositoryLayer.delete(id);
        return results;
    }



}


module.exports = ApplicationLayer;