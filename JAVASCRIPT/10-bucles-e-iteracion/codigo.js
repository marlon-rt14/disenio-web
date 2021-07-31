let numero = 0;

// if(numero < 10){
// 	numero++;
// 	//alert("es menor que 10");
// 	document.write(numero);
// }

numero = 0;

document.write("while <br>");

while(numero < 10){
	document.write(numero + " ");
	numero++;
}

numero = 0;

document.write("<br><br> do while <br>");

do {
	document.write(numero + " ");
	numero++;
}while(numero <= 10);

numero = 0;
document.write("<br><br> for <br>");
for (let i = 0; i < 10; i++) {
	//const element = array[index];
	document.write(i + " ");
}
document.write("<br>")
let j = 6;
for (j; j >= 0; j--) {
	document.write(j + " ");
}

//--------------------------------------------------
let animales = ["gato", "perro","tiranosaurio"];
document.write("<br><br> for in <br>");
for(item in animales){
	document.write(item + " ");
	document.write(animales[item] + " ");
}

document.write("<br><br> for of <br>");
for(item of animales){
	document.write(item + " ");
}


numero = 0;
document.write("<br><br> break <br>");
while (numero < 1000) {
	numero++;
	document.write(numero + " - ");
	if (numero == 10) {
		document.write(" fin");
		break;
	}
}

document.write("<br><br> continue <br>");
for (let i = 0; i <= 5; i++) {
	if (i == 3) {
		continue;
	}
	document.write(i + " ");
}

document.write("<br><br> LABEL <br>");
let array1 = ["maria", "josefa", "roberta"];
let array2 = ["pedro", "marcelo", array1, "josefina"];

forRancio: 

for(let item in array2){
	if(item == 2){
		for(item of array1){
			document.write(item + "<br>");
			break forRancio;
		}
	}else{
		document.write(array2[item] + "<br>");
	}
}