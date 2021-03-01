const GoogleAuthService = require ("./google-auth-service");
const googleAuthenticationService = require("../../infrastructure/authetication-strategies/google.js");
const authenticationService = require("../../infrastructure/authentication");

const authService = new GoogleAuthService(authenticationService);

module.exports =  authService;