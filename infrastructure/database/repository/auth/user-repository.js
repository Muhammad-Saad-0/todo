const db = require("../../models");
const User = db.user;


class UserRepository{
    
    async findUserByName (username) {
        try {
            const results = await User.findAll({attributes: ['username', 'password'], where: {username: username}})
            return results;    
        } catch (error) {
            return error;
        }
    }

    async addNewUser (data) {
        console.log(data);
        try {
            const results = await User.create(data)
            return results;    
        } catch (error) {
            throw error
        }
    }
}

module.exports = UserRepository;