const home = function (req, res, next) {
  res.json('This is home!');
  next();
};

const getAllItems = function(req, res, next){
  res.json('Get all Posts route');
  next();
};

const postNewItem = function(req, res, next){
  res.json('Posted an item');
  next();
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