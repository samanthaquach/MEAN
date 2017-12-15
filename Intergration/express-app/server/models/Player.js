var mongoose = require('mongoose');
var error;
var bcrypt = require('bcrypt');

var PlayerSchema = new mongoose.Schema({
    player_name: {
        type: String,
        minlength: 2,
        required: [true, "ame cannot be empty!"],
        trim: true
    },
    position: {
        type: String,
        required: [true, "position cannot be empty!"],
        trim: true
    },

});

mongoose.model('Player', PlayerSchema);