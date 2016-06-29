var bodyParser = require('body-parser');
var path = require('path');
var questions = require('../data/friends.js');

module.exports

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');



module.exports = function(app) {


    app.get('/api/:questions?', function (req, res) {

        res.sendFile(path.join(__dirname + '/app/data/friends.js'));

        var question = req.params.questions;

        if (question) {
            console.log(question);

            for (var i = 0; i < question.length; i++) {

                if (question == questions[i].routeName) {
                    res.json(questions[i]);
                    return;
                }
            }

            res.json(false);
        }

        else {
            res.json(questions);
        }
    });

};
