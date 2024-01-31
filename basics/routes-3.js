const fs = require('fs');

const requestHandler = (request, response) => {

  const url = request.url;
  const method = request.method;

  if (url === '/') {
    response.setHeader('Content-Type', 'text/html');
    response.write('<html>');
    response.write('<head><title>My Message Form</title></head>');
    response.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Submit</button></form></body>');
    response.write('</html>');
    return response.end();
  }

  if (url === '/message' && method === 'POST') {
    const chunks = [];

    // Registering a listener for receving a chunk of data
    request.on('data', (chunk) => {
      chunks.push(chunk);
    })

    // Registering a listener when all chunks are received
    return request.on('end', () => {
      const body = Buffer.concat(chunks).toString();
      const message = body.split('=')[1];
      // Registering a listener when data is written to the file
      fs.writeFile('message.txt', message, () => {
        response.statusCode = 302;
        response.setHeader('Location', '/');
        return response.end();
      });
    })
  }

  response.setHeader('Content-Type', 'text/html');
  response.write('<html>');
  response.write('<head><title>My first page</title></head>');
  response.write('<body><h1>Hello from my Node.js server!</h1></body>');
  response.write('</html>');

  response.end();
}

module.exports = requestHandler;