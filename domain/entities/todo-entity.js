const {v4:uuidv4} = require('uuid');

class TodoEntity {

    constructor ({_id, description, startDate, endDate, completed}) {
        this.id = _id;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.completed = completed;
    }

    static createFromObject({ _id, description, startDate, endDate, completed }){
        if(!_id){
            _id = uuidv4();
        }
        return new TodoEntity({_id, description, startDate, endDate, completed});
    }

}

module.exports = TodoEntity;