var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res) {
   res.send('Received req param: ' + req.params.id); 
});

router.post('/', function(req, res) {
    res.json({success: true})
});

router.put('/', function(req, res) {
    res.status(400).json({message: 'bad rq!!'});
});

router.delete('/', function(req, res) {
    res.send('req del request');
});

module.exports = router;