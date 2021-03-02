const express = require ('express');
const router = express.Router();
const authController = require ('../controllers/auth');

router.get('/google/login', authController.findGoogleUser.bind(authController));

router.get('/google/callback', authController.findAuthorizationToken.bind(authController));

router.post('/login', authController.find.bind(authController));

router.post('/signup', authController.addNewUser.bind(authController));

module.exports = router;