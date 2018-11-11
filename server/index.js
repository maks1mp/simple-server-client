var cors = require('cors');
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// app.use(cors());

var data = [];

app.get('/', function(request, response) {
    var filePath = path.join(__dirname, '../client', 'index.html');

    response.sendFile(filePath);
});

app.get('/friends', function(request, response) {
    response.end(JSON.stringify(data));
});

app.post('/friend', function(request, response) {
    var name = request.body.name;

    data.push(name);

    response.status(200).end();
});


app.listen(3001, function() {
    console.log('Server ready!');
});