var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('GET route on hello');
});

module.exports = router;