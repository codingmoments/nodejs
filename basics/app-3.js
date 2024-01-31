const http = require('http');

const routes = require('./routes-3');

// Registering a listener for receiving HTTP request
const server = http.createServer(routes);

server.listen(3000);