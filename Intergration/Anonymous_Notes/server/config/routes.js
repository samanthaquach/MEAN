var NotesController = require('../controllers/NotesController'); //rename controller
var mongoose = require('mongoose');
var path = require("path");

module.exports = function (app) {
    
    app.get('/API/getNote', function (req, res) {
    NotesController.getAll(req, res); })

    app.post('/API/createNote', function (req, res) {
        console.log('=--===--- this route ==--=---- Create Note ==----')
        console.log('req.body', req.body)
        NotesController.createNote(req, res);
    })

    app.all("*", (request, response) => { response.sendFile(path.resolve("./angular-app/dist/index.html")) });

    // platform notes:
    // app.get('/tasks', (request, response) => { /*…*/ })
    // app.post('/tasks', (request, response) => { /*…*/ })
    // app.post('/tasks', )
    // app.all("*", (request, response) => { response.sendFile(path.resolve("./boiler/dist/index.html")) });

};    

