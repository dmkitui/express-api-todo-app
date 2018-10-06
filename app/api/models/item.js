const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
	title: {
		type: String,
		required: [true, 'Missing name of task'],
		unique: [true, 'Task already exists']
	},
	description: {
		type: String,
		trim: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	status: {
		type: Boolean,
		default: false
	}
});

const Item = mongoose.model('Item', ItemSchema);
module.exports = Item;