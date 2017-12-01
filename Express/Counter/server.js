var express = require("express");
var session = require("express-session");
var bodyParser = require('body-parser');
var path = require("path");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.use(session({ secret: 'codingdojorocks' }));  // string for encryption
app.set('view engine', 'ejs');

function addOneToCounter(request) {
    return request.session.counter = request.session.counter ?
        request.session.counter + 1 : 1;
}

// app.get('/', function (req, res) {
//     res.render("index", { counter: addOneToCounter(request) });
// })

app.get('/', (request, response) => {
    response.render('index', { counter: addOneToCounter(request) });
});

app.post('/by-two', (request, response) => {
    addOneToCounter(request);

    response.redirect('/');
});

app.post('/reset', (request, response) => {
    request.session.destroy();

    response.redirect('/');
});


app.listen(8000, function () {
    console.log("listening on port 8000");
});
