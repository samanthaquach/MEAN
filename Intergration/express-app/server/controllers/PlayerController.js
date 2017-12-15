module.exports = (function () {
    var mongoose = require('mongoose'),
        User = mongoose.model('Player'),
        bcrypt = require('bcrypt');

    return {
        index: function (req, res) {
            Player.find({}, function (err, persons) {
                res.render('index', {
                    persons: persons
                });
            });
        },

        New: function (req, res) {
            req.session.currentUser = user._id;
            if (req.session.currentUser == null) {
                res.redirect('/');
            }
            res.render('new');
            // console.log("newpage curr user:", req.session.currentUser);
            // User.findOne({
            //     _id: req.session.currentUser
            // }, function (err, user) {
            //     res.render('new', { user: user });
            // });
        },

        createPlayer: function (req, res) {
            var person = new User();
            person.name = req.body.name;
            person.position = req.body.position;

            person.save(function (err, newperson) {
                console.log(person);
                req.session.CurrentUser = newperson._id;
                res.redirect('/New');
            });



        },

    };
})();