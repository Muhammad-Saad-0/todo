const AuthController = require('./auth-controller');
const authService = require('../../../application/auth');

const authController = new AuthController(authService);

module.exports = authController;