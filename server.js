//required node applications
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//
var app = express();
var PORT = 3000;

//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

require('./app/routing/api-routes.js')(app);


app.get('/', function(req, res){
    //res.send("Welcome to the Friend Finder Page!")
    res.sendFile(path.join(__dirname + '/app/public/home.html'));
});

app.get('/Survey', function(req, res){
    //res.send("Welcome to the Friend Finder Page!")
    res.sendFile(path.join(__dirname + '/app/public/survey.html'));
});

app.listen(PORT, function(){
    console.log('App listening on PORT ' + PORT);
});

