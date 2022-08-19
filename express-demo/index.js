const express = require('express');
const app = express(); 

app.use(express.json());
const lessons = [
    {id: 1, lesson: 1},
    {id: 2, lesson: 2}, 
    {id: 3, lesson: 3}
];

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.get('/api/lessons', function(req, res) {
    res.send([lessons]); 
});

app.get('/api/lessons/:id', function(req, res) {
    const lesson = lessons.find(function(l) {
        return l.id === parseInt(req.params.id)
    }); 
    if(!lesson) {
        res.status(404).send('The lesson ID given was not found')
    }
    res.send(lesson)
});

//return the paramaters
app.get('/api/lessons/:year/:title', function(req, res) {
    res.send(req.params);
});

const PORT = process.env.PORT || 3000
app.listen(PORT, function() {
    console.log(`app is running on port: ${PORT}`);
});