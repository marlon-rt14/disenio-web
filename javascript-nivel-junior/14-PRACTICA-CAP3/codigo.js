class Celular {
  constructor(color, peso, tamanio, rdc, ram) {
    this.color = color;
    this.peso = peso;
    this.tamanio = tamanio;
    this.rdc = rdc;
    this.ram = ram;
    this.encendido = false;
  }

  presionarBotonEncendido() {
    if (this.encendido == false) {
      alert("celular prendido");
      this.encendido = true;
    } else {
      alert("celular apagado");
      this.encendido = false;
    }
  }

  reiniciar() {
    if (this.encendido == true) {
      alert("reinicindo celular");
    } else {
      alert("El celular esta apgado");
    }
  }

  tomarFoto() {
    alert(`foto tomada en una resolucion de: ${this.rdc}`);
  }

  grabarVideo() {
    alert(`grabando video en: ${this.rdc}`);
  }

  mobileInfo() {
    return `
	  Color: <b>${this.color}</b></br>
	  Peso: <b>${this.peso}</b></br>
	  Tamaño: <b>${this.tamanio}</b></br>
	  Resolución de Video: <b>${this.rdc}</b></br>
	  Memoria RAM: <b>${this.ram}</b></br>
	  `;
  }
}

class CelularAltaGama extends Celular {
  constructor(color, peso, tamanio, rdc, ram, rdce) {
    super(color, peso, tamanio, rdc, ram);
    this.resolucionDeCamaraExtra = rdce;
  }

  grabarVideoLento() {
    alert("estas grabando en camara lenta");
  }

  reconocimientoFacial() {
    alert("vamos a iniciar un reconocimiento facial");
  }

  infoAltaGama() {
    return (
      this.mobileInfo() +
      `Resolucion de camara extra: <b>${this.resolucionDeCamaraExtra}</b></br>`
    );
  }
}

// const celular1 = new Celular("rojo", "150g", "5'", "hd", "1GB");
// const celular2 = new Celular("negro", "155g", "5.4'", "full hd", "2GB");
// const celular3 = new Celular("blanco", "146g", "5.9'", "full hd", "2GB");

// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();

const celular1 = new CelularAltaGama(
  "rojo",
  "130g",
  "5.2'",
  "4K",
  "3GB",
  "full hd"
);
const celular2 = new CelularAltaGama("negro", "142g", "6'", "4K", "4GB", "hd");

// document.write(`
// ${celular1.mobileInfo()} <br>
// ${celular2.mobileInfo()} <br>
// ${celular3.mobileInfo()} <br>
// `);

// document.write(`
// ${celular1.infoAltaGama()} <br>
// ${celular2.infoAltaGama()} <br>
// `);

class App {
  constructor(descargas, puntuacion, peso) {
    this.descargas = descargas;
    this.puntuacion = puntuacion;
    this.peso = peso;
    this.iniciada = false;
    this.instalada = false;
  }

  instalar() {
    if (this.instalada == false) {
      this.instalada = true;
      alert("app instalada correctamente");
    }
  }

  desinstalar() {
    if (this.instalada == true) {
      this.instalada = false;
      alert("app desinstalada correctamente");
    }
  }

  abrir() {
    if (this.iniciada == false && this.instalada == true) {
      this.iniciada = true;
      alert("app iniciada");
    }
  }

  cerrar() {
    if (this.iniciada == true && this.instalada == true) {
      this.iniciada = false;
      alert("app cerrada");
    }
  }

  appInfo() {
    return `
		Descargas: <b>${this.descargas}</b></br>
		Puntuacion: <b>${this.puntuacion} </b></br>
		Peso: <b>${this.peso}</b><br>
		`;
  }
}

const app = new App("16.000", "5 estrellas", "900mb");
const app2 = new App("1.000", "4 estrellas", "400mb");
const app3 = new App("6.000", "4.5 estrellas", "100mb");
const app4 = new App("23.000", "4.8 estrellas", "1gb");
const app5 = new App("900", "5 estrellas", "250mb");
const app6 = new App("17", "3.7 estrellas", "522mb");
const app7 = new App("42.981", "2.9 estrellas", "723mb");

// app.instalar();
// app.abrir();
// app.cerrar();
// app.desinstalar();

document.write(`
${app.appInfo()} <br>
${app2.appInfo()} <br>
${app3.appInfo()} <br>
${app4.appInfo()} <br>
${app5.appInfo()} <br>
${app6.appInfo()} <br>
${app7.appInfo()} <br>
`);
