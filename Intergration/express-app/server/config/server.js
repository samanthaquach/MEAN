var express = require('express'),
    path = require('path'),
    bp = require('body-parser'),
    app = express(),
    session = require('express-session'),
    mongoose = require("mongoose"),
    port = 8000;

app.use(bp.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, './client/static')));
app.use(session({
    secret: 'frenchbulldogs',
    resave: true,
    saveUninitialized: true
}));

app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(port, function () {
    console.log("Yo, you're listening on " + port);
});

// example below // 

// // Express
// const express = require('express');
// const app = express();

// // Path
// const path = require('path');

// // CORS
// const cors = require('cors');
// app.use(cors());

// // Static Directory
// app.use(express.static(__dirname + '/angular-app/dist'));

// // Body Parser 
// const parser = require('body-parser');
// app.use(parser.json());
// app.use(parser.urlencoded({ extended: true }));

// // Morgan (optional)
// let morgan = require("morgan");
// app.use(morgan('dev'));