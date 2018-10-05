const express = require('express');
const routes = require('./api/routes/routes');
const app = express();

app.use('/', routes);

app.listen(3000);
console.log("To-do API server running at: http://localhost:3000");