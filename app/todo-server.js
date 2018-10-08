const express = require('express');
const itemRoutes = require('./api/routes/items');
const userRoutes = require('./api/routes/users');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
app.use(session({
	secret:'sdfsdfdsfdsfds3243223dsfsdf2332423erwe',
	resave: true,
	saveUninitialized: false
}));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todoapp', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'db error'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/items', itemRoutes);
app.use('/users', userRoutes);

app.listen(3000);
console.log('To-do API server running at: http://localhost:3000');

module.exports.db = db;