var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res) {
   res.send('Received req param: ' + req.params.id); 
});

router.post('/', function(req, res) {
    console.log(JSON.stringify(req.body, null, 2));

    res.json({
        success: true,
        user: req.body.username
    })
});

router.put('/', function(req, res) {
    res.status(400).json({message: 'bad dddrqasdfasdfasdf!!'});
});

router.delete('/', function(req, res) {
    res.send('req del request');
});

module.exports = router;