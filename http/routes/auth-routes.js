const express = require ('express');
const router = express.Router();
const authController = require ('../controllers/auth');

router.post('/login', authController.find.bind(authController));

router.post('/signup', authController.addNewUser.bind(authController));

module.exports = router;