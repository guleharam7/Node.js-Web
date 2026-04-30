const http = require('http');
const msg = 'My first server!';
const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Welcome to my server! Built by Gul E Haram\n')
    res.end(msg);
});
server.listen(3000, function() {
    console.log('Server is running!');
    console.log('Open your browser and go to: http://localhost:3000');
});

// Q1 : JavaScript in a browser runs inside the browser while Node.js can run JavaScript without the need of browser (on server) and it is used to build backend applications.
// Q2 : require('http') is like requesting http modules to be loaded in Node.js. We write require to include and use these modules in our programs.
// Q3 : Port 3000 is like a door number on our computer. We need to specify a port so the server knows where to look for the requests and the browser can also know where to connect.
// Q4 : If we forget to call res.end() then the server does not finish the response and the browser keeps loading and thus, no output is shown.
// Q5 : Non-blocking means that the program does not wait for one task to finish before it starts another one.
// For example, when a student asks a teacher a question, the teacher can pause it and respond to another student, then come back and complete the first answer.