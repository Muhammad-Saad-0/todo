class AuthService {

    constructor (newUserRepository, newAuthenticationService, newGoogleAuthentication) {
        this.userRepository = newUserRepository;
        this.AuthenticationService = newAuthenticationService;
        this.googleAuthentication  = newGoogleAuthentication; 
    };

    async login (username, password) {
        try {
            const results = await this.userRepository.findUserByName(username);
            if (Object.keys(results).length === 0){
                return({message: "Invalid username or password"});
            }
            else{
                const validPassword = password === results[0]['dataValues']['password'] ? true : false;
	            if (!validPassword)return ({message: "Invalid email or password"});

                const data = { username: results[0]['dataValues']['user'] }
                var token = this.AuthenticationService.createAuthenticationToken(data);
                return (token)
            }
        } 
        catch (error) {
            throw (error)
        }
    }

    async loginUsingGoogle () {
        console.log(this.googleAuthentication.url);
        return (this.googleAuthentication.url)
    }

    async gettingGoogleAccessToken (authorizationCode) {
        const {tokens} = await this.googleAuthentication.oauth2Client.getToken(authorizationCode)
        this.googleAuthentication.oauth2Client.setCredentials(tokens);
        console.log("In getting google access token");
        return tokens;
    }

    async signUp (username, password) {
        try {
            const results = await this.userRepository.findUserByName(username);
            if (Object.keys(results).length === 0){
                const user = {username: username, password: password}
                const results = await this.userRepository.addNewUser(user);
            }
            else {
                return("This email is already exists. So use another email.")
            }
        } catch (error) {
            throw (error)
        }
    }
}


module.exports = AuthService;