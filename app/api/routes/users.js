const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.route('/register')
	.post(usersController.registerUser);

router.route('/login')
	.post(usersController.loginUser);

router.route('/:userId').get();

module.exports = router;