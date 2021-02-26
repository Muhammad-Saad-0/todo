const { isSchema } = require("joi")

module.exports = (mongoose) => {

    const UserSchema = new mongoose.Schema({
        username: String,
        password: String
    });

    const UserModel = mongoose.model('User', UserSchema);

    return UserModel;
};

