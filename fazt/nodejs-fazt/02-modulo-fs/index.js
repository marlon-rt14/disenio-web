
const os = require('os');

//console.log(os.hostname());

const networkInterfaces = os.networkInterfaces();
//console.log(networkInterfaces['lo'][0]['family']);
//console.log(os.platform());
//console.log(os.release());
//console.log("free mem: ", os.freemem(), " bytes");
//console.log("total mem: ", os.totalmem(), " bytes");

const fs = require('fs');

//fs.writeFile('./texto.txt', 'linea 1', function(err){
    //if(err){
        //console.log(err);
    //}
    //console.log('archivo creado');
//})
//
//console.log("ultima linea de codigo");

fs.readFile('./texto.txt', (err, data) => {
    if(err){
	  console.log(err);
    }
    console.log(data.toString());
})
