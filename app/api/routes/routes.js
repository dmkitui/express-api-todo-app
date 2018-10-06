const express = require('express');
const router = express.Router();
const controller = require('../controllers/todoAppController');
const Item = require('../models/item');

router.route('/').get(controller.home);

router.route('/items')
	.get(controller.getItems)
	.post(controller.postNewItem);

router.route('/items/:id')
	.get(controller.getItem)
	.put(controller.editItem)
	.delete(controller.editItem);

module.exports = router;