var mongoose = require('mongoose');
var error;
var NotesSchema = new mongoose.Schema({
    text: {
        type: String,
        minlength: 3,
        trim: true,
        required: true
    }
}, { timestamps: true });


mongoose.model('Notes', NotesSchema);
var Noted = mongoose.model('Notes')