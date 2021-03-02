const googleAuthConfig = require('../config/google-auth.js'); 
const {google} = require('googleapis');

class GoogleAuthentication {
    oauth2Client = new google.auth.OAuth2(
        googleAuthConfig.GOOGLE_CLIENT_ID,
        googleAuthConfig.GOOGLE_CLIENT_SECRET,
        'http://localhost:3002/google/callback'
    );

    scopes = [
        'https://www.googleapis.com/auth/blogger',
        'https://www.googleapis.com/auth/calendar'
    ];

    url = this.oauth2Client.generateAuthUrl ({
        // 'online' (default) or 'offline' (gets refresh_token)
        access_type: 'offline',
      
        // If you only need one scope you can pass it as a string
        scope: this.scopes
    });
}

module.exports = GoogleAuthentication;