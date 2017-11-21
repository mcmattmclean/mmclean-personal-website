const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout: 'main'});
var bodyParser = require('body-parser');
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/static', express.static('public'));

app.get('/', function(req,res){
    res.render('home');
});

app.get('/about', function(req,res){
    res.render('about');
});

app.get('/contact', function(req,res){
    res.render('contact');
});

app.get('/resume', function(req,res){
    res.render('resume');
});

app.use(function(req,res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('plain/text');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(PORT, function(){
    console.log('Listening on ' + PORT);
});