// const http = require("http");

// const colors = require("colors");

// const handleServer = function (req, res) {
//   res.writeHead(200, { "Content-type": "text/html" });
//   res.write(`<h1>Hola mundo desde NodeJS</h1>`);
//   res.write(`<h1>Hola mundo</h1>`);
//   res.end();
// };

// // http.createServer(handleServer).listen(3000);
// const server = http.createServer(handleServer);

// server.listen(3000, function () {
// 	console.log("Server on port 3000".yellow);
// });

const express = require('express');
const colors = require('colors');

const server = express();

server.get('/', function (req, res) {
  res.send(`<h1>Hola mundo con Express y NodeJS</h1>`);
  res.end(); // no es necesario
});

server.listen(3000, () => {
  console.log("Server on port 3000".red);
});
