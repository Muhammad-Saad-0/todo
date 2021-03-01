const googleAuthConfig = require('../config/google-auth.js'); 
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser((user,done) => {
    done(null, user.id);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: googleAuthConfig.GOOGLE_CLIENT_ID,
    clientSecret: googleAuthConfig.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3002/google/callback"
},
	function(accessToken, refreshToken, profile, done) {
		console.log(profile);
		done(null, profile);
	}
));