
var http = require('http');
http.createServer(function(req, res) {
  res.writeHead(200, {


'Content-Type': 'text/plain'
  });
  res.end('Welcome to Ag Comms');
}).listen(8000);
console.log('Server running at http://localhost:8000/');