const todoSequelizeRepository = require ("../sequelize/repository/todo");
const todoMongoRepository = require ("../mongo/repository/todo");

class RepositoryFactory {

    createRepository(database) {
        if(database == "sequelize"){
            return todoSequelizeRepository;
        }
        if(database == "mongo"){
            return todoMongoRepository;
        }
    }
}

module.exports = RepositoryFactory;