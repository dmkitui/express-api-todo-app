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
			res.redirect('/login');
		}
	});
};


module.exports.registerUser = registerUser;