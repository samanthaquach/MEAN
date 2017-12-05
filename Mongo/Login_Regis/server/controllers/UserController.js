module.exports = (function () {
    var mongoose = require('mongoose'),
        User = mongoose.model('User');
    return {
        index: function (req, res) {
            User.find({}, function (err, persons) {
                res.render('index', {
                    persons: persons
                });
            });
        },

        Login: function (req, res) {
            User.findOne({
                email: req.params.email
            }, function (err, person) {
                // request.session = request.session.id;
                res.render('new', { person: person });
            });
        },

        createPerson: function (req, res) {
            var person = new User();
            person.first_name = req.body.first_name;
            person.last_name = req.body.last_name;
            person.password = req.body.password;
            person.confirm_password = req.body.confirm_password;
            person.birthday = req.body.birthday;
            person.email = req.body.email;
            person.save(function (err) {
                console.log(err);
            });
            res.redirect('/');
        },

    };
})();