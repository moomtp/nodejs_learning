// Config.js
// local data export js object
const config = {
    hostname: '127.0.1.1',
    port: '8000'
};

exports.config = config;

// myserver.js
// reading config setting from another js file
const http = require("http");
const config = require('./config').config;

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(config.port, config.hostname, () => {
    console.log(`Server rinning at http://${config.hostname} : ${config.port}/`);
});