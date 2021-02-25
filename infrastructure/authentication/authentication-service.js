var jwt = require('jsonwebtoken');
const jwtConfig = require("../config/jwt");

class AuthenticationService {

    authenticationTokenCreate (data) {
        // passing data as object
        const token = jwt.sign( data , jwtConfig.JWT_SECRET_KEY);
        return token;
    }

    authenticationTokenValidate (token) {
        const decoded = jwt.verify(token, jwtConfig.JWT_SECRET_KEY);
        return decoded;
    }


}

module.exports = AuthenticationService;