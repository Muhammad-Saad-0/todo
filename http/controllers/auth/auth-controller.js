class AuthController {

    constructor (newAuthService) {
        this.authService = newAuthService;
    }

    async find (req, res){
        const { username, password} = req.body;
        const response = await this.authService.login(username, password);
        res.send(response);
    }
}

module.exports = AuthController;