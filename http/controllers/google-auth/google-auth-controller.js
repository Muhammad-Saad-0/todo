class GoogleAuthController {

    constructor (newGoogleAuthService) {
        this.googleAuthService = newGoogleAuthService;
    }

    find(req, res) {
        const response = this.googleAuthService.login();
        res.send(response);
    }
}

module.exports = GoogleAuthController;