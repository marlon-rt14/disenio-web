import React, { useState, useEffect } from "react";

function Reloj({ hora }) {
  return <h3>{hora}</h3>;
}

export default function RelojHooks() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  // const tictac = (valor) => {setVisible(valor)};

	useEffect(() => {
		let temporizador;
		if (visible) {
			temporizador = setInterval(() => {
				setHora(new Date().toLocaleTimeString());
			}, 1000)
		} else {
			clearInterval(temporizador);
		}
		return () => {
			clearInterval(temporizador);
			console.log('fase de desmontaje');
		}
	}, [visible]);
	    /* <button onClick={() => tictac(true)}>Iniciar</button> */
      /* <button onClick={() => tictac(true)}>Iniciar</button> */
  return (
    <>
      <h2>17 Reloj con Hooks</h2>
      {visible && <Reloj hora={hora} />}

      <button onClick={() => setVisible(true)}>Iniciar</button>
			<button onClick={() => setVisible(false)}>Detener</button>
		</>
  );
}
