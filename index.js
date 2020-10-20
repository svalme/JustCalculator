const http = require('http');
const fs = require('fs');
var path = require('path');
const url = require('url');

const server = http.createServer((request, res) => {
  
  var u = url.parse(request.url, true);
  var filePath = '.' + u.pathname;

  if (filePath === './') 
    filePath = './views/pages/index.html';

  var extname = path.extname(filePath);
  var contentType = 'text/html';
  console.log("extension name: " + extname);
  switch (extname) {
    case '.html':
      contentType = 'text/html';
      break;
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.ico':
      contentType = 'image/x-icon';
      break;
  }

  console.log("console check.");
  console.log("contentType: " + contentType);

  if(filePath != './favicon.ico') {

    fs.readFile(filePath, (err, data) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': contentType });
      res.write(data);
      res.end();
    });

  } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end();
  };
  
});

// start the server on port 
server.listen(process.env.PORT);
