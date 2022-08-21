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

//Get Post Put Delete
app.get('/api/lessons', function(req, res) {
    res.send([lessons]); 
});

app.post('/api/lessons', function(req, res) {
    if(!req.body.lesson || req.body.lesson.length < 3) {
        res.status(400).send('lesson required and should be at least 3 characters long')
    }
    const lesson = {
        id: lessons.length + 1,
        lesson: req.body.lesson
    }
    lessons.push(lesson)
    res.send(lesson);
});

app.put('/api/lessons/:id', function(req, res) {
    //Look up existing lessons
    //If lesson do not exist, return a 404 error - not found
    //validate the input
    //If input is invalid, then return a 400 error - bad request 
    //update the specified lesson
    //Return the updated lesson to the client, in the browser
    const lesson = lessons.find(function(l) {
        return l.id === parseInt(req.params.id)
    }); 
    if(!lesson) {
        res.status(404).send('The lesson ID given was not found')
    }
    if(!req.body.lesson || req.body.lesson.length < 3) {
        res.status(400).send('lesson required and should be at least 3 characters long')
    }
    if(req.body.lesson || req.body.lesson.length < 3) {
        res.status(200).send('lesson updated successfully')
    }

    lesson.lesson = req.body.lesson
})

app.delete('/api/lessons/:id', function(req, res) {
    //look up all of the lessons
    //If it does not exist, return a 404
    //delete
    //return lesson that was deleted 
    const lesson = lessons.find(function(l) {
        return l.id === parseInt(req.params.id)
    }); 
    if(!lesson) {
        res.status(404).send('The lesson ID given was not found')
    }
    const index = lessons.indexOf(lesson)
    lessons.splice(index, 1)
    res.send(lesson);
});

//End Get Put Post Delete 


//return specified route
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