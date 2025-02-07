//In this code, we're creating a basic HTTP server using Node.js. 
// The server listens on localhost (127.0.0.1) at port 3000 and 
// responds with "Hello World" in plain text for every incoming request.
//console.log("hii");
const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 4000;

const server = createServer((req, res) => {
    console.log(res);
    
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});