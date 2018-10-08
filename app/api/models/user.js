const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
	userName: {
		type: String,
		required: [true, 'Username is required'],
		unique: [true, 'UserName already exists']
	},
	email: {
	  type: String,
		required: [true, 'Email is not provided'],
		unique: [true, 'Email already used to sign up']
	},
	signUpDate: {
		type: Date,
		default: Date.now
	},
	password: {
		type: String,
		required: [true, 'Password is required']
	}
});

UserSchema.pre('save', function(next) {
	const user = this;
	bcrypt.hash(user.password, 10, function(error, hash) {
		if (error) {
			next(error);
		} else {
			user.password = hash;
			next();
		}
	}
	);
});

const User = mongoose.model('User', UserSchema);
module.exports = User;