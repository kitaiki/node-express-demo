var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('hello world');
});

app.get('/user/:id', function(req, res) {
   res.send('Received req param: ' + req.params.id); 
});

app.post('/user', function(req, res) {
    res.json({success: true})
});

app.put('/user', function(req, res) {
    res.status(400).json({message: 'bad rq!!'});
});

app.delete('/user', function(req, res) {
    res.send('req del request');
});

app.listen(3000, function() {
    console.log('server running port 3000');
});

