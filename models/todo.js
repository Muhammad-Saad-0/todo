module.exports = (sequelize, Sequelize) => {
    
    const Todo = sequelize.define("todo", {
        id: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        description: {
            type: Sequelize.STRING
        },
        startDate: {
            type: Sequelize.STRING
        },
        endDate: {
            type: Sequelize.STRING
        },
        completed: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    });
  
    return Todo;
};