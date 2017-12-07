
module.exports = function (app) {
    var User = require('../controllers/UserController');

    app.get('/', function (req, res) {
        User.index(req, res);
    });
    app.get('/New', function (req, res) {
        User.New(req, res);
    });
    app.post('/CreateUser', function (req, res) {
        User.createPerson(req, res);
    });
    app.post('/Login', function (req, res) {
        User.Login(req, res);
    });
};