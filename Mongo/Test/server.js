var express = require('express'),
    path = require('path'),
    bp = require('body-parser'),
    app = express(),
    port = 8000;

app.use(bp.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, './client')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(port, function () {
    console.log("Yo meng, you're listening on " + port);
});

// // Require the Express Module
// var express = require('express');
// var mongoose = require('mongoose');
// // Create an Express App
// var app = express();
// // Require body-parser (to receive post data from clients)
// var bodyParser = require('body-parser');
// // Integrate body-parser with our App
// app.use(bodyParser.urlencoded({ extended: true }));
// // Require path
// var path = require('path');
// // Setting our Static Folder Directory
// app.use(express.static(path.join(__dirname, './static')));
// // Setting our Views Folder Directory
// app.set('views', path.join(__dirname, './views'));
// // Setting our View Engine set to EJS
// app.set('view engine', 'ejs');
// // Routes
// // Root Request
// app.get('/', function(req, res) {
//     // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
//     res.render('index');
// })
// // Add User Request 
// app.post('/users', function(req, res) {
//     console.log("POST DATA", req.body);
//     // This is where we would add the user from req.body to the database.
//     res.redirect('/');
// })
// // Setting our Server to Listen on Port: 8000
// app.listen(8000, function() {
//     console.log("listening on port 8000");
// })
