//definir la clase
class Animal {
	//el constructor de la clase
	constructor(especie, edad, color){
		//inicializar las propiedades de la clase con los valores que recibe como parametro. Aunque en est ejemplo los nombres son iguales, no nedecariamente tiene que ser asi. Otro ejemplo. this.age = edad;
		this.especie = especie;
		this.edad = edad;
		this.color = color;
		this.info = `Soy ${this.especie} tengo ${this.edad} años y soy de color ${this.color}<br>`;
	}

	verInfo = () => {
		document.write(this.info);
	}

	//AQUI TENMOS POLIMORFISMO
	// ladrar = () => {
	// 	if(this.especie == "perro"){
	// 		document.write("¡WAW! <br>");
	// 	}else{
	// 		document.write(`No puede ladrar ya que es un ${this.especie} <br>`);
	// 	}
	// }

}

//herencia
class Perro extends Animal {
	constructor(especie, edad, color, raza){
		//las prpiedades que hereda
		super(especie, edad, color);
		this.raza = null;
	}

	static ladrar(){
		alert("¡WAW!");
	}

	set setRaza(newName){
		this.raza = newName
	}

	get getRaza(){
		return this.raza;
	}
}

//instanciar la clase
const perro = new Perro("perro", 5, "marron", "doberman");
const gato = new Animal("gato", 2, "negro");
const pajaro = new Animal("pajaro", 1, "verde");

//mostrar los valores del objeto perro
//document.write(perro);
console.log(perro);

//acceder a las propiedades del objeto perro 
// document.write(perro.info + "<br>");
// document.write(gato.info + "<br>");
// document.write(pajaro.info + "<br>");

// perro.verInfo();
// gato.verInfo();
// pajaro.verInfo();

//perro.verInfo();
//perro.ladrar();
// gato.ladrar();
// pajaro.ladrar();


perro.setRaza = "pedro";
//document.write(perro.raza);
document.write(perro.getRaza);
