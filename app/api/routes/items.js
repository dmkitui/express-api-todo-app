const express = require('express');
const router = express.Router();
const controller = require('../controllers/itemsController');


//router.route('/').get(controller.home);

router.route('/')
	.get(controller.getItems)
	.post(controller.postNewItem);

router.route('/:itemId')
	.get(controller.getItem)
	.put(controller.editItem)
	.delete(controller.editItem);

module.exports = router;