const express = require('express');
const app = express();
app.get('/', function(req, res) {
    res.send('Welcome to my Express website!');
});
app.get('/about', function(req, res){
    res.send('This is the About page.');
});
app.get('/welcome', function(req,res){
    res.send('<h1>Welcome!</h1><p>This is <b>HTML</b> from Node.js!</p>');
});
app.get('/info', function(req, res) {
    res.json({
        name: 'My App',
        language: 'JavaScript',
        framework: 'Express'
    });
});

app.get('/user/:name', function(req, res) {
    const name = req.params.name;
    res.send('Hello, ' + name + '! Welcome to our site!');
});


app.get('/product/:category/:id', function(req, res) {
    const category = req.params.category;
    const id = req.params.id;

    res.json({
        category: category,
        productId: id
    });
});

// Exercise 3
app.get('/contact', function(req,res){
    res.json({
        email: 'user@gmail.com',
        phone: '09383798'
    });
});

app.get('/student/:rollno', function(req, res){
    const rollno = req.params.rollno;
    res.json({
        message: 'Student found',
        rollno: rollno
    })
});

app.get('/courses', function(req, res){
    const courses = ['Web', 'OOP', 'DLD'];
    res.json({
        course1: courses[0],
        course2: courses[1],
        course3: courses[2]
    })
});

app.use(function(req, res) {
    res.status(404).send('Oops! Page not found. Go back to / (home)');
});


app.listen(3000, function() {
    console.log('Server running at http://localhost:3000');
});