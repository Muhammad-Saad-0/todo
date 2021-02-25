class AuthService {

    constructor (newAuthRepository, newAuthenticationService) {
        this.authRepository = newAuthRepository;
        this.AuthenticationService = newAuthenticationService;
    }

    async login (username, password) {
        try {
            const results = await this.authRepository.login(username);
            if (Object.keys(results).length === 0){
                return({message: "Invalid username or password"});
            }
            else{
                const validPassword = password === results[0]['dataValues']['password'] ? true : false;
	            if (!validPassword)return ({message: "Invalid email or password"});

                const data = { username: results[0]['dataValues']['user'] }
                var token = this.AuthenticationService.authenticationTokenCreate(data);
                return (token)
            }
        } 
        catch (error) {
            throw (error)
        }
    }
}


module.exports = AuthService;