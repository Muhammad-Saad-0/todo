const GoogleAuthController = require('./google-auth-controller');
const googleAuthService = require('../../../application/google-auth');

const googleAuthController = new GoogleAuthController(googleAuthService);

module.exports = googleAuthController;