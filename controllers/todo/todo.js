class TodoController {

    constructor (newObjTodoApplicationLayer) {
        this.objTodoApplicationLayer = newObjTodoApplicationLayer
    }

    async create (req, res) {
        const response = await this.objTodoApplicationLayer.addNewTodo();
        res.send(response);
    }

    async select (req, res) {
        const response = await this.objTodoApplicationLayer.getAllTodo(req);
        res.send(response);
    }

    async update (req, res) {
        const response = await this.objTodoApplicationLayer.updateTodo(req);
        res.send(response);
    }

    async delete (req, res) {
        const response = await this.objTodoApplicationLayer.deleteTodo(req);
        res.send(response);
    }

}

module.exports = TodoController;