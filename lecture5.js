const http = require('http');  
const os = require('os');  
const fs = require('fs');  
const path = require('path');  

const server = http.createServer((req, res) => {  
    if (req.url === '/sysinfo') {  
        const systemInfo = {  
            hostname: os.hostname(),  
            platform: os.platform(),  
            architecture: os.arch(),  
            uptime: os.uptime(),  
            freeMemory: os.freemem(),  
            totalMemory: os.totalmem(),  
        };  

        fs.writeFile(path.join(__dirname, 'lecture5.json'), JSON.stringify(systemInfo), (err) => {  
            if (err) {  
                res.writeHead(500, { 'Content-Type': 'text/plain' });  
                res.end('Error writing system info to file');  
            } else {  
                res.writeHead(200, { 'Content-Type': 'application/json' });  
                res.end(JSON.stringify(systemInfo));  
            }  
        });  
    } else if (req.url === '/readfile') {  
        fs.readFile(path.join(__dirname, 'lecture5.json'), 'utf8', (err, data) => {  
            if (err) {  
                res.writeHead(404, { 'Content-Type': 'text/plain' });  
                res.end('File not found');  
            } else {  
                res.writeHead(200, { 'Content-Type': 'application/json' });  
                res.end(data);  
            }  
        });  
    } else {  
        res.writeHead(404, { 'Content-Type': 'text/plain' });  
        res.end('Resource not found');  
    }  
});  

server.listen(3000, () => {  
    console.log('Server running at http://localhost:3000/');  
});
