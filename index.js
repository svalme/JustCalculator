const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  
  var pathOfPage;

  console.log("console check.");

  if (req.url === '/') {

    pathOfPage = './views/pages/index.html';

    fs.readFile(pathOfPage, (err, data) => {
      if (err) throw err;
      res.writeHead(200, 'Content-Type', 'text/html');
      res.write(data);
      res.end();
    });
  } else {
    res.writeHead(200, {'Content-Type': 'image/x-icon'});
    res.end();
  }

  
});

// start the server on port 5000
server.listen(process.env.PORT);