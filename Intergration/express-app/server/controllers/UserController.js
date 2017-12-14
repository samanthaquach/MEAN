module.exports = (function () {
    var mongoose = require('mongoose'),
        User = mongoose.model('User'),
        bcrypt = require('bcrypt');

    return {
        index: function (req, res) {
            User.find({}, function (err, persons) {
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

        Login: function (req, res) {
            User.findOne({
                email: req.body.email
            }, function (error, user) {
                if (User == null) {
                    console.log("no such user");
                    console.log(error);
                }
                if (User != null) {
                    console.log(user.email);
                    console.log(user.password);
                    bcrypt.compare(req.body.password, user.password, function (passError, result) {
                        if (result) {
                            console.log(user);
                            req.session.currentUser = user._id;
                            console.log("user_logged is:", req.session.currentUser);
                            User.findOne({
                                _id: user._id
                            }, function (uror, loggedUser) {
                                res.render('new', { loggedUser: loggedUser });
                            })

                        }
                        else {
                            console.log("password does not match!");
                            res.redirect('/');
                        }
                    })
                }
            })
        },

        createPerson: function (req, res) {
            var person = new User();
            person.first_name = req.body.first_name;
            person.last_name = req.body.last_name;
            person.password = req.body.password;
            person.confirm_password = req.body.confirm_password;
            person.birthday = req.body.birthday;
            person.email = req.body.email;

            if (person.password != person.confirm_password) {
                console.log("passwords do not match!");
                res.redirect('/');
            }
            person.save(function (err, newperson) {
                console.log("errors are:", err);
                console.log(person);
                req.session.CurrentUser = newperson._id;
                console.log("user is =>", req.session.CurrentUser);
                res.redirect('/New');
            });



        },

    };
})();