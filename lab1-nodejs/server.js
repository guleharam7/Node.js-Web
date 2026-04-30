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
