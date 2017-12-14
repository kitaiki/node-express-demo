var express = require('express');
var app = express();
var user = require('./routes/user');

var morgan = require('morgan');
var bodyParser = require('body-parser');


// var myLogger = function(req, res, next) {
//     console.log(req.url, req.method);
//     next();
// }

app.use(morgan('dev'));
app.use(bodyParser.json());
// app.use(myLogger);
app.use('/user', user);


app.listen(3000, function() {
    console.log('server running port 3000');
});

//morgan: 로깅 미들웨어
//body-parser: JSON 형태 데이터 파싱

// nodemon main.js => 개발시 서버 자동 재기동