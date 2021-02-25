const AuthService = require ("./auth-service");
const authenticationService = require("../../infrastructure/authentication");
const userRepository = require ("../../infrastructure/database/repository/auth");

const authService = new AuthService(userRepository, authenticationService);

module.exports =  authService;