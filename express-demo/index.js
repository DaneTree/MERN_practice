const express = require('express');
const app = express(); 
const PORT = process.env.PORT || 3000

app.use(express.json());

const lessons = [
    {id: 1, lesson: 1},
    {id: 2, lesson: 2}, 
    {id: 3, lesson: 3}
];
//GET Route
app.get('/', (req, res) => res.send('Hello World'));
//GET Route
app.get('/api/lessons', (req, res) => res.send([lessons]));
//GET return specified route
app.get('/api/lessons/:id', (req, res) => {
    const lesson = lessons.find( l => l.id === parseInt(req.params.id)); 
    if(!lesson) res.status(404).send('The lesson ID given was not found')
    res.send(lesson)
});
//POST Route
app.post('/api/lessons', (req, res) => {
    if(!req.body.lesson || req.body.lesson.length < 3) res.status(400).send('lesson required and should be at least 3 characters long')
    const lesson = {
        id: lessons.length + 1,
        lesson: req.body.lesson
    }
    lessons.push(lesson)
    res.send(lesson);
});
//PUT Route
app.put('/api/lessons/:id', (req, res) => {
    const lesson = lessons.find(l =>  l.id === parseInt(req.params.id)); 
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
//DELETE Route
app.delete('/api/lessons/:id', (req, res) => {
    const lesson = lessons.find(l => l.id === parseInt(req.params.id)); 
    if(!lesson) res.status(404).send('The lesson ID given was not found')
    const index = lessons.indexOf(lesson)
    lessons.splice(index, 1)
    res.send(lesson);
});
//return the paramaters
app.get('/api/lessons/:year/:title', (req, res) => res.send(req.params));

app.listen(PORT,() => console.log(`app is running on port: ${PORT}`));