var express = require('express');
var app = express();
var user = require('./routes/user');

app.use('/user', user);

app.listen(3000, function() {
    console.log('server running port 3000');
});

