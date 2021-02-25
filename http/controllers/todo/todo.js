class TodoController {

    constructor (newTodoApp) {
        this.todoApp = newTodoApp
    }

    async create (req, res) {
        const { description, startDate, endDate } = req.body;
        const response = await this.todoApp.addNewTodo(description, startDate, endDate);
        res.send(response);
    }

    async select (req, res) {
        const condition =  null;
        const response = await this.todoApp.getAllTodo(condition);
        res.send(response);
    }

    async update (req, res) {
        const data = req.body;
        const id = req.params.id;

        const response = await this.todoApp.updateTodo(data, id);
        res.send(response);
    }

    async delete (req, res) {
        const id = req.params.id;

        const response = await this.todoApp.deleteTodo(id);
        res.send(response);
    }

}

module.exports = TodoController;