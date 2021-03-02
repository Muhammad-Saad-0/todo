class AuthController {

    constructor (newAuthService) {
        this.authService = newAuthService;
    }

    async findGoogleUser (req, res){
        try {
            const url = await this.authService.loginUsingGoogle();
            res.redirect(url);
        } catch (error) {
            throw(error);
        }
        
    }

    async findAuthorizationToken (req, res){
        const {code } = req.query;
        const response = await this.authService.gettingGoogleAccessToken(code);
        res.send(response);
    }

    async find (req, res){
        const { username, password } = req.body;
        const response = await this.authService.login(username, password);
        res.send(response);
    }

    async addNewUser (req, res){
        const { username, password } = req.body;
        const response = await this.authService.signUp(username, password);
        res.send(response);
    }
}

module.exports = AuthController;