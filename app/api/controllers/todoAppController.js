const Item = require('../models/item');
//const mongoose = require('mongoose');
//const Item = mongoose.model('Item');

const home = function (req, res, next) {
	console.log('STATUS: ', res.statusCode);
	res.json('This is home!');
	next();
};

const getAllItems = function(req, res, next){
	res.json('Get all Posts route');
	next();
};

const postNewItem = function(req, res){
	if(req.body.title) {
		Item.create(req.body, function (error, item) {
			if(error) {
				if(error.name === 'MongoError'){
					res.status(400);
					return res.json(error.errmsg);
				} else {
					res.status(500)
					return res.json(error);
				}
			}
			return res.json(item);
		});
	} else {
		const error = new Error('Title is required');
		res.status(400);
		return res.json(error);
	}
};

const getItem = function(req, res, next){
	res.json('View One Item');
	next();
};

const deleteItem = function(req, res, next){
	res.json('Delete One Item');
	next();
};

const editItem = function(req, res, next){
	res.json('Edit One Item');
	next();
};

module.exports.home = home;
module.exports.getItems = getAllItems;
module.exports.postNewItem = postNewItem;
module.exports.getItem = getItem;
module.exports.postNewItem = postNewItem;
module.exports.deleteItem = deleteItem;
module.exports.editItem = editItem;
module.exports.postNewItem = postNewItem;