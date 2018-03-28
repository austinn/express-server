var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var index = require('./index.js');

app.use(bodyParser.json());

//this is an http GET
app.get('/foo', index.doGet); //ex localhost:3001:/foo?id={your param here}

var server = app.listen(process.env.PORT || 3001, function() {
	var port = server.address().port;
	console.log("Server now running on port", port);
})

module.export = app;