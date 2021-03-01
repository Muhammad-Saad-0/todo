const passport = require('passport');

class GoogleAuthService {

    constructor (newAuthenticationService) {
        this.AuthenticationService = newAuthenticationService;
    }

    login () {
        var token = this.AuthenticationService.createAuthenticationToken({id: 1});
        return (token)
    }

}

module.exports = GoogleAuthService;