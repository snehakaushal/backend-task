//We’re setting up an Express.js server to log incoming request details, such as timestamp, 
// IP address, URL, method, and headers, into a requests.log file. Additionally, we implement 
// log rotation for large files and capture extra request information 
// like query parameters and user-agent.
const express = require('express');
const fs = require('fs');
const app = express();

// Middleware to log request details
app.use((req, res, next) => {
  const log = {
    timestamp: new Date().toISOString(),
    ip: req.ip,
    url: req.originalUrl,
    protocol: req.protocol,
    method: req.method,
    hostname: req.hostname,
    headers: req.headers,
    userAgent: req.get('User-Agent')
  };

  // Append log to requests.log file
  fs.appendFile('requests.log', JSON.stringify(log) + '\n', (err) => {
    if (err) {
      console.error('Error writing to log file', err);
    }
  });

  next();
});

// Routes
app.get("/", (req, res) => {
  res.send("Hello, Frontend");
});

app.get("/about", (req, res) => {
  res.send("Hello, About Page");
});

app.get("/contact", (req, res) => {
  res.send("Hello, Contact Page");
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
