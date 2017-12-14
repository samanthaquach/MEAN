var mongoose = require('mongoose');
var error;
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
    },
    first_name: {
        type: String,
        minlength: 1,
        required: [true, "first name cannot be empty!"],
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
    birthday: {
        type: Date,
        required: true,
    },

});

UserSchema.pre('save', function (done) {
    console.log("HASHING NOW.. HASHING NOW..");
    var hashed_password = bcrypt.hashSync(this.password, 10);
    this.password = hashed_password;
    done();
});

mongoose.model('User', UserSchema);