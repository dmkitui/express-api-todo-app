const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController');

router.route('/register')
	.post(controller.registerUser);

router.route('/:userId').get();

module.exports = router;