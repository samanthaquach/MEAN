var express = require('express');
var path = require('path');
var bp = require('body-parser');
var app = express();
var session = require('express-session');
var mongoose = require("mongoose");
var port = 8000;


app.use(bp.json());
app.use(session({
    secret: 'frenchbulldogs',
    resave: true,
    saveUninitialized: true
}));

app.use(express.static(__dirname + '/angular-app/dist'));

require('./server/config/mongoose');
var routes = require('./server/config/routes');
routes(app);

app.listen(port, function () {
    console.log("Yo, you're listening on " + port);
});