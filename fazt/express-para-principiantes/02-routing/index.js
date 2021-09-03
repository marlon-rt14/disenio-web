const express = require("express");
const app = express(); // iniciamos el servidor

// le decimos que ahora express pueda entender el formato json
app.use(express.json());

// le decimos que para todas las rutas /user/* nos muestre un mensaje
// y ya no ejecute los demas metodos, los demas metodos http
// para que continue con los demas metodos se ejecuta otro parametro next()
app.all('/user', (req, res, next) => {
	console.log('Por aqui paso');
	// res.send('Terminado'); // sin el parametro next
	next();
})

//enviamos algo cuando se hace una peticion get
app.get("/", (req, res) => {
  // sirven para devolver cosas
  res.send("GET PETITION RECEIVED");
});

// sirven para recibir datos y guardarlos en una BDD, procesarlos
// y luego devolver una respuesta a la aplicacion que me envio los datos
app.post("/post", (req, res) => {
  res.send("POST REQUEST RECEIVED");
});

// cuando el frontend me envia datos y necesito actualizarlos,
// en una BDD o alguna logica y luego devolver una respuesta
app.put("/put", (req, res) => {
  res.send(`<h1>UPDATE REQUEST RECEIVED</h1>`);
});

// cuando el navegador me envie una peticion delete, eliminar un dato dentro del
// servidor y luego enviar una respuesta
app.delete("/delete", (req, res) => {
  res.send("DELETE REQUES RECEIVED");
});

// #######################################################

app.get("/user", (req, res) => {
  res.json({
    username: "Cameron",
    lastname: "howe",
  });
});

//rutas dinamicas
app.post("/user/:id", (req, res) => {
	console.log(req.body); // cuerpo de la peticion
	console.log(req.params); // parametros de la peticion
	res.send("POST REQUEST RECEIVED");
});

app.delete("/user/:userID", (req, res) => {
	res.send(`User ${req.params.userID} deleted`);
});

app.put("/user/:id", (req, res) => {
	console.log(req.body); 
	res.send(`User ${req.params.id} updated`);
});

app.listen(5000, () => {
  console.log("Server on port 5000");
});
