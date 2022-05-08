import React, { Component } from "react";

function Pokemon(props) {
  return (
    <figure>
      <img src={props.avatar} alt={props.name} />
      <figcaption>{props.name}</figcaption>
    </figure>
  );
}

export default class AjaxApis extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
    let url = "https://pokeapi.co/api/v2/pokemon/";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        json.results.forEach((elemento) => {
          fetch(elemento.url)
            .then((res) => res.json())
            .then((json) => {
              // console.log(json);
              let pokemon = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_default,
              };

              let pokemons = [...this.state.pokemons, pokemon];
              this.setState({ pokemons });
            });
        });
      });
  }

  render() {
    return (
      <div>
        <h2>14 Peticiones Asincronas en Componentes de Clase</h2>
        {this.state.pokemons.length === 0 ? (
          <h4>Cargando...</h4>
        ) : (
          this.state.pokemons.map((pokemon) => (
            <Pokemon
              key={pokemon.id}
              name={pokemon.name}
              avatar={pokemon.avatar}
            />
          ))
        )}
      </div>
    );
  }
}
