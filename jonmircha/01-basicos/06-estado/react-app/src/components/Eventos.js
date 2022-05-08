import React, { Component } from "react";

export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    // hacer el bindeo en el construnctor es lo que recomienda react
    // Es necesario el bindeo para que this no este vacio
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar(e) {
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  }
  restar(e) {
    console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    return (
      <div>
        <h2>09 Eventos en componentes de clase ES6</h2>
        <nav>
          <button
            style={{ padding: "5px", fontSize: "23px" }}
            onClick={this.sumar}
          >
            +
          </button>
          <button
            style={{ padding: "5px", fontSize: "23px" }}
            onClick={this.restar}
          >
            -
          </button>
        </nav>
        <h1>{this.state.contador}</h1>
      </div>
    );
  }
}

// ######################### ECMASCRIPT 7
// Properties Initializer
export class EventosES7 extends Component {
  state = {
    contador: 0,
  };

  // las arrows functions heredan el this dependiendo del contexto donde se encuentran
  sumar = (e) => {
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  };
  restar = (e) => {
    console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  render() {
    return (
      <div>
        <h2>10 Eventos en componentes de clase ES7</h2>
        <nav>
          <button
            style={{ padding: "5px", fontSize: "23px" }}
            onClick={this.sumar}
          >
            +
          </button>
          <button
            style={{ padding: "5px", fontSize: "23px" }}
            onClick={this.restar}
          >
            -
          </button>
        </nav>
        <h1>{this.state.contador}</h1>
      </div>
    );
  }
}

// function Boton(props) {
//   return <button onClick={ props.myOnClick}>Boton echo componente</button>;
// }

// const Boton = (props) => {
//   return <button onClick={ props.myOnClick}>Boton echo componente</button>
// }

const Boton = ({myOnClick}) => {
  return <button onClick={ myOnClick}>Boton echo componente</button>
}

export class MasSobreEventos extends Component {
  handleClick = (e, mensaje) => {
    console.log(e);
    console.log(e.nativeEvent);
    console.log(e.target);
    console.log(e.nativeEvent.target);
    console.log(mensaje);
  };

  render() {
    return (
      <div>
        <h2>11 Mas sobre eventos</h2>
        <button
          onClick={(e) =>
            this.handleClick(e, "Hola, pasando parametro desde un evento")
          }
        >
          Saludar
        </button>


        {/* Evento personalizado */}
        {/* <Boton
          onClick={(e) =>
            this.handleClick(e, "Hola, pasando parametro desde un evento")
          }
        /> */}

        <Boton
          myOnClick={(e) =>
            this.handleClick(e, "Hola, pasando parametro desde un evento")
          }
        />

      </div>
    );
  }
}
