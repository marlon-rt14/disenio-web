import React, { useState, useEffect } from "react";

function Pokemon({ avatar, name }) {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
}

export default function AjaxHooks() {
  const [pokemons, setPokemons] = useState([]);

  // useEffect(() => {
  // 	let url = "https://pokeapi.co/api/v2/pokemon/";
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       // console.log(json);
  //       json.results.forEach((elemento) => {
  //         fetch(elemento.url)
  //           .then((res) => res.json())
  //           .then((json) => {
  //             // console.log(json);
  //             let pokemon = {
  //               id: json.id,
  //               name: json.name,
  //               avatar: json.sprites.front_default,
  // 						};

  // 						setPokemons((pokemons) =>[...pokemons, pokemon]);
  //           });
  //       });
  //     });
  // },[])

  useEffect(() => {
    const getPokemons = async (url) => {
      let res = await fetch(url),
        json = await res.json();
      // console.log(res);

      json.results.forEach(async (elemento) => {
        let res = await fetch(elemento.url),
          json = await res.json();
        // console.log(json);
        let pokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default,
        };

        setPokemons((pokemons) => [...pokemons, pokemon]);
      });
    };

    getPokemons("https://pokeapi.co/api/v2/pokemon/");
  }, []);

  return (
    <div>
      <h2>18 Peticiones Asincronas en Hooks</h2>
      {pokemons.length === 0 ? (
        <h4>Cargando...</h4>
      ) : (
        pokemons.map((pokemon) => (
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
