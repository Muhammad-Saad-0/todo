class TodoController {

    constructor (newTodoService) {
        this.todoService = newTodoService
    }

    async create (req, res) {
        const { description, startDate, endDate } = req.body;
        const response = await this.todoService.addNewTodo(description, startDate, endDate);
        res.send(response);
    }

    async select (req, res) {
        const { limit, page } = req.query;
        const condition =  null;
        const response = await this.todoService.getAllTodo(condition, parseInt(limit), parseInt(page));
        res.send(response);
    }

    async selectOne (req, res) {
        const id = req.params.id;
        const response = await this.todoService.getOneTodo(id);
        res.send(response);
    }

    async update (req, res) {
        const data = req.body;
        const id = req.params.id;

        const response = await this.todoService.updateTodo(data, id);
        res.send(response);
    }

    async delete (req, res) {
        const id = req.params.id;
        try {
            const response = await this.todoService.deleteTodo(id);
            res.sendStatus(200);
        } catch (error) {
            throw error;
        }
    }

}

module.exports = TodoController;