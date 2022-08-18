const express = require('express');
const app = express();
var hello = require('./routes.js');

app.use('/hello', hello);

// app.get('/hello', function(req, res) {
//     res.send('GET Route on Hello')
// });



app.listen(3000);