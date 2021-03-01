const express = require('express')
const router = express.Router()
const passport = require('passport');
const googleAuthController = require('../controllers/google-auth')

router.get('/google', passport.authenticate('google', {scope: 'profile'}));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), googleAuthController.find.bind(googleAuthController));


module.exports = router