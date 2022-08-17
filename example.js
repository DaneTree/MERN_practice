var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.get('/example', function(req, res) {
    res.send('hello from the example route');
});

app.get('/example/c', function(req, res) {
    res.send('Hello from sub route C!');
});

app.get('/example/b', function(req, res) {
    res.send('Hello from sub route B!');
});

var callbackOne = function(req, res, next) {
    console.log('callbackOne');
    next();
};

var callbackTwo = function(req, res, next) {
    console.log('callbackTwo');
    next();
};

var callbackThree = function(req, res) {
    console.log('callbackThree says hello from route C!');
    res.send('callbacks triggered');
};

app.get(
    '/example/d',
    function(req, res, next) {
        console.log('the response will be send by the next function...');
        next();
    },
    function(req, res) {
        res.send('Hello from D!');
    }
);

app.get('/example/c/withmiddleware', [callbackOne, callbackTwo, callbackThree]);

app.listen(PORT, ()=> {
    console.log(`Listening on port: ${PORT}`);
});