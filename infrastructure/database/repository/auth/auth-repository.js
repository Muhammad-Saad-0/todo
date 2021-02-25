const db = require("../../models");
const User = db.user;


class AuthRepository{
    
    async login (username) {
        try {
            const results = await User.findAll({attributes: ['username', 'password'], where: {username: username}})
            return results;    
        } catch (error) {
            return error;
        }
    }
}

module.exports = AuthRepository;