const db = require("../../models");
const User = db.user;

class AuthRepository {

    async findUserByName (username) {
        try {
            const results = await User.find({username: username});
            return results;    
        } catch (error) {
            return error;
        }
    }

    async addNewUser (data) {
        try {
            const results = await User.create(data)
            return results;    
        } catch (error) {
            throw error
        }
    }
}

module.exports = AuthRepository;