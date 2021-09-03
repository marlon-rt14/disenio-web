const express = require("express");
const morgan = require("morgan");

const app = express();

// por ejemplo aquei decimos que antes de que llegen a culquier ruta, 
// poder ejecutar esta funcion

// function logger(req, res, next) {
// 	console.log(`Route received: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
// 	next();
// }

app.use(express.json());
app.use(morgan('dev'));
// app.use(logger);

app.get("/", (req, res) => {
  res.send("GET PETITION RECEIVED");
});

app.post("/post", (req, res) => {
	res.send("POST REQUEST RECEIVED");
});

app.put("/put", (req, res) => {
  res.send(`<h1>UPDATE REQUEST RECEIVED</h1>`);
});

app.delete("/delete", (req, res) => {
  res.send("DELETE REQUES RECEIVED");
});

// #######################################################

// app.all("/user", (req, res, next) => {
//   console.log("Por aqui paso");
//   next();
// });

app.get("/user", (req, res) => {
  res.json({
    username: "Cameron",
    lastname: "howe",
  });
});

//rutas dinamicas
app.post("/user/:id", (req, res) => {
  console.log(req.body);
  console.log(req.params);
  res.send("POST REQUEST RECEIVED");
});

app.delete("/user/:userID", (req, res) => {
  res.send(`User ${req.params.userID} deleted`);
});

app.put("/user/:id", (req, res) => {
  console.log(req.body);
  res.send(`User ${req.params.id} updated`);
});

app.listen("5000", () => {
  console.log("Server on port 5000");
});
