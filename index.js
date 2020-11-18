require('marko/node-require');
var markoExpress = require("marko/express");
const express = require('express');

const app = express();
app.use(markoExpress());

app.use(express.static('public'));
app.use(express.static('files'));

app.get('/', function(req, res) {
        res.redirect('/aline_edvania');
})

app.get('/aline_edvania', function (req, res) {
        res.marko(require('./templates/cv.marko'));
});


app.listen(3000, '0.0.0.0', function () { 
        console.log('Servidor iniciado ...');
});



