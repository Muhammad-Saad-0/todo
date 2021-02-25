const auth = require("../../infrastructure/authentication");

function authorization(req, res, next){
	const token = req.header('x-auth-token');
	if (!token) return res.send('Access denied. No token provided.');

	const results = auth.authenticationTokenValidate(token);
	next();
}

module.exports = authorization