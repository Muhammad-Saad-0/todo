module.exports = (sequelize, Sequelize) => {
    const UserModel = sequelize.define("user", {
        username: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
    });
  
    return UserModel;
};