const User = require('../models/user');


const registerUser = function(req, res){
	if (req.body.password !== req.body.confirmPassword) {
		res.status(400);
		return res.json('Passwords do not match!');
	}
	User.create(req.body, function(error, results) {
		if(error){
			res.status(400);
			res.json(error);
		} else {
			res.status(201);
			res.json('Registration successful');
		}
	});
};

const loginUser = function(req, res, next) {
	if(req.body.username && req.body.password) {
		User.authenticate(req.body.username, req.body.password, function(error, user) {
			if (error || !user) {
				const error = new Error('Wrong username or password');
				error.status = 401;
				return next(error);
			} else {
				req.session.userId = user._id;
				return res.json({message: 'Logg in successful'});
			}
		});
	} else {
		res.status(400);
		res.json('Username and/or password is required');
	}
	
}
module.exports.registerUser = registerUser;
module.exports.loginUser = loginUser;