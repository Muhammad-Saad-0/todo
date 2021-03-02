const AuthService = require ("./auth-service");
const authenticationService = require("../../infrastructure/authentication");
const userRepository = require ("../../infrastructure/database/sequelize/repository/auth");
const GoogleAuthentication = require("../../infrastructure/authetication-strategies/google-authentication.js");
const googleAuthentication = new GoogleAuthentication();

const authService = new AuthService(userRepository, authenticationService, googleAuthentication);

module.exports =  authService;