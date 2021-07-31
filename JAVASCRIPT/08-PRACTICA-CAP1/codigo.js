let dineroRoberto = prompt("Ingrese la cantidad de Roberto");
let dineroPedro = prompt("Ingrese la cantidad de Pedro");
let dineroCofla = prompt("Ingrese la cantidad de Cofla");

dineroRoberto = parseInt(dineroRoberto);
dineroPedro = parseInt(dineroPedro);
dineroCofla = parseInt(dineroCofla);

document.write(`Roberto: <br>`);
if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
  document.write(`helado de agua en $0.60 <br>`);
} else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
  document.write(`helado de crema en $1.00 <br>`);
} else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
  document.write(`helado de marca heladix en $1.60 <br>`);
} else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
  document.write(`helado de marca heladovich en $1.70 <br>`);
} else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
  document.write(`helado de marca helardo en $1.8 <br>`);
} else if (dineroRoberto >= 2.9) {
  document.write(`helado con confites en $2.9 <br>`);
  document.write(`mega helado en $2.9 <br>`);
} else {
  document.write(`No te alcanza para ningun helado`);
}

document.write(`<br> Pedro: <br>`);
if (dineroPedro >= 0.6 && dineroPedro < 1) {
  document.write("helado de agua en $0.60");
} else if (dineroPedro >= 1 && dineroPedro < 1.6) {
  document.write("helado de crema en $1.00");
} else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
  document.write("helado de marca heladix en $1.60");
} else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
  document.write(`helado de marca heladovich en $1.70 <br>`);
} else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
  document.write("helado de marca helardo en $1.8");
} else if (dineroPedro >= 2.9) {
  document.write("helado con confites en $2.9");
  document.write("mega helado en $2.9");
} else {
  document.write(`No te alcanza para ningun helado`);
}

document.write(`<br> Cofla: <br>`);
if (dineroCofla >= 0.6 && dineroCofla < 1) {
  document.write("helado de agua en $0.60");
  document.write(`<b>Su vuelto es: <b/> ${dineroCofla - 1.0} <br>`)
} else if (dineroCofla >= 1 && dineroCofla < 1.6) {
  document.write("helado de crema en $1.00");
  document.write(`<b>Su vuelto es: <b/> ${dineroCofla - 1.0} <br>`)
} else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
  document.write("helado de marca heladix en $1.60");
  document.write(`<b>Su vuelto es: <b/> ${dineroCofla - 1.6} <br>`)
} else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
  document.write("helado de marca heladovich en $1.70");
  document.write(`<b>Su vuelto es: <b/> ${dineroCofla - 1.70} <br>`)
} else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
  document.write("helado de marca helardo en $1.8");
  document.write(`<b>Su vuelto es: <b/> ${dineroCofla - 1.80} <br>`)
} else if (dineroCofla >= 2.9) {
  document.write(`helado con confites en $2.9 <br>`);
  document.write(`mega helado en $2.9 <br>`);
  document.write(`<b>Su vuelto es: <b/> ${dineroCofla - 2.90} <br>`)
} else {
  document.write(`No te alcanza para ningun helado`);
}
