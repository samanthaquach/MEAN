var express = require("express");
var session = require("express-session");
var bodyParser = require('body-parser');
var path = require("path");
var app = express();

app.use(bp.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use('/', routes);
routes.post('/info', (req, res) => {
    res.render('info', { data: req.body });
});
app.listen(8000, () => console.log('Listening on port 8000'));