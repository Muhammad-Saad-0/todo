const AuthService = require ("./auth-service");
const authenticationService = require("../../infrastructure/authentication");
const authRepository = require ("../../infrastructure/database/repository/auth");

const authService = new AuthService(authRepository, authenticationService);

module.exports =  authService;