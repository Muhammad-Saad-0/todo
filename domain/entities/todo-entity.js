const {v4:uuidv4} = require('uuid');

class TodoEntity {

    constructor ({id, description, startDate, endDate, completed}) {
        this.id = id;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.completed = completed;
    }

    static createFromObject({ id, description, startDate, endDate, completed=false }){
        if(!id){
            id = uuidv4();
        }
        return new TodoEntity({id, description, startDate, endDate, completed});
    }

}

module.exports = TodoEntity;