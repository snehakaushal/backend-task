//This code demonstrates creating a basic HTTP server using Node.js. 
// The server listens on port 4000 and responds with multiple plain 
// text messages ("backend engineering," "chitkara," and "g24 batch bekar h") for 
// any incoming request. It logs "server is listening" to indicate that it has started.
const http=require("http");
// console.log(http);

    const server=http.createServer((req,res)=>{
        // console.log(req);
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write("backend engineering");
        res.write("chitkara")
        res.end("g24 batch bekar h")
        
    });


    server.listen(4000,()=>{
        console.log("server is lisning");
        
    })