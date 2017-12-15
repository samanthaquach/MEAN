var mongoose = require('mongoose');
var Notes = mongoose.model('Notes');
module.exports = (function () {


    return {
        index: function (req, res) {
            Notes.find({}, function (err, Notes) {
                res.render('index', {
                    Notes: Notes
                });
            });
        },


        createNote: function (req, res) {
            console.log('HEY, YOURE CREATING....')
            var note = new Notes();
            note.text = req.body.text;
            note.save(function (error, notey) {
                console.log('THIS NOTE IS', note)
                if (error) {
                    console.log('===-- ERRRORRR --====')
                    console.log(err)
                    return res.json({'error': error});
                }
                else {
                    console.log('MAMA, I MADE IT!')
                    console.log('THIS NOTE IS', notey)
                    return res.json({'newNote': notey})
                }

            });

        },

        getAll: function (req, res) {
            console.log('SOMETHING IS HERE')
            Notes.find({}, function (error, response) {
                console.log('ERRORS,', error);
                if (error || response == null) {
                    console.log('ERRRORRRR')
                    return res.json({ 'error': error, 'response': response })
                } else {
                    console.log('YASS')
                    // return res.json({ 'response': response })
                    return res.json(response);
                }
            })
        }

    };
})();