var path = require('path');

// Basic route that sends the user first to the AJAX Page
app.get('/', function(req, res){
	res.sendFile(path.join(__routing + '/home.html'));
})

app.get('/survey', function(req, res){
	res.sendFile(path.join(__routing+ '/survey.html'));
})