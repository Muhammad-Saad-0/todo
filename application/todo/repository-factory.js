const todoSequelizeRepository = require ("../../infrastructure/database/sequelize/repository/todo");
const todoMongoRepository = require ("../../infrastructure/database/mongo/repository/todo");

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