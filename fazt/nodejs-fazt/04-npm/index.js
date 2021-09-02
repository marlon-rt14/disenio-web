const http = require("http");

const colors = require("colors");

//request, response
// http.createServer(function(req, res)  {
//     res.writeHead(200,{'Content-type': 'text/html'});
//     res.write(`<h1>Hola mundo desde NodeJS</h1>`);
//     res.write(`<h1>Hola mundo</h1>`);
//     res.end();
// }).listen(3000);

const handleServer = function (req, res) {
  res.writeHead(200, { "Content-type": "text/html" });
  res.write(`<h1>Hola mundo desde NodeJS</h1>`);
  res.write(`<h1>Hola mundo</h1>`);
  res.end();
};

// http.createServer(handleServer).listen(3000);
const server = http.createServer(handleServer);

server.listen(3000, function () {
	console.log("Server on port 3000".yellow);
});