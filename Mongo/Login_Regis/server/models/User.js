var mongoose = require('mongoose');
var error;
var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
    },
    first_name: {
        type: String,
        minlength: 1,
        requited: [true, "first name cannot be empty!"],
        trim: true
    },
    last_name: {
        type: String,
        required: [true, "last name cannot be empty!"],
        trim: true
    },
    password: {
        type: String,
        minlength: 2,
        required: [true, "password cannot be empty!"]
    },
    confirm_password: String,
    birthday: {
        type: Date,
        // required: [true, "date cannot be empty!"]
    },
});

mongoose.model('User', UserSchema);