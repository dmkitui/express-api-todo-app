const Item = require('../models/item');

const home = function (req, res, next) {
	console.log('STATUS: ', res.statusCode);
	res.json('This is home!');
	next();
};

const getAllItems = function(req, res){
	Item.find(function(error, results) {
		if(error){
			res.status(500);
			res.json(error);
		} else {
			res.json(results);
		}
	});
};

const postNewItem = function(req, res){
	if(req.body.title) {
		Item.create(req.body, function (error, item) {
			if(error) {
				if(error.name === 'MongoError'){
					res.status(400);
					return res.json(error.errmsg);
				} else {
					res.status(500);
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

const getItem = function(req, res){
	Item.findById(req.params.itemId, (error, item) => {
		if(error){
			res.status(404);
			res.json('Item does not exist');
		} else {
			res.json(item);
		}
	});
};

const deleteItem = function(req, res, next){
	Item.findById(req.params.itemId, (error, item) => {
		if (error) {
			res.status(404);
			res.json('Item does not exist');
		} else {
			Item.remove(err => {
				if (err) {
					res.status(500);
					res.json('Internal server error');
				}
				else {
					res.status(204);
					res.json(`Item ${req.params.itemId} deleted successfully`);
				}
			});
		}
	});
};

const editItem = function(req, res, next){
	console.log('Put started....')
	Item.findById(req.params.itemId, (error, item) => {
		if(error) {
			res.status(404);
			res.json('Item does not exist');
		} else {
			for( let p in req.body ){
				item[p] = req.body[p];
			}
			item.save();
			res.status(204)
			res.json(item);
		}
	});
};


module.exports.home = home;
module.exports.getItems = getAllItems;
module.exports.postNewItem = postNewItem;
module.exports.getItem = getItem;
module.exports.postNewItem = postNewItem;
module.exports.deleteItem = deleteItem;
module.exports.editItem = editItem;
module.exports.postNewItem = postNewItem;