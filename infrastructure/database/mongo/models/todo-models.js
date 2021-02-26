module.exports = (mongoose)=> {

    const TodoSchema = new mongoose.Schema({
        id: String,
        description: String,
        startDate: String,
        endDate: String,
        completed: {type: Boolean, default: false}
    });

    const TodoModel = mongoose.model('Todo', TodoSchema);

    return TodoModel;
};