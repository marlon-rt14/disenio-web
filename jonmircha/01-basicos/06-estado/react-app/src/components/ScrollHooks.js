import React, { useState, useEffect } from 'react';

export default function ScrollHooks() {
	
	const [scrollY, setScrollY] = useState(0);
	// const [name, setName] = useState('Marlon');

	useEffect(() => { // va a ejecutar todo lo que este en esta funcion
		// console.log('Moviendo el scroll');

		const detectarScroll = () => setScrollY(window.pageYOffset);

		window.addEventListener('scroll', detectarScroll);

		// cuando este componente ScrollHooks ya no exista me voy a desuscribir de este evento, eliminar este evento
		return () => {
			window.removeEventListener('scroll', detectarScroll);
		}
	},[scrollY]); // que se ejecute solo cuando este estado cambie

	// cuando le pasamos el segundo parametro quiere decir que este useEffect se va a ejecutar cuando el etado cambie
	// Si queremos que se ejecute solo una vez, react recomienda dejar el arreglo de dependencias vacio.
	useEffect(() => {
		// console.log('fase de montaje');
	},[]);
	
	// lo ideal es que solamente se actualice cuando las variables de estado que intervengan cambien
	useEffect(() => {
		// console.log('fase de actualizacion');
	});


	useEffect(() => {
		return () => {
			// console.log('fase de desmontaje');
		}
	});

	return (
		<>
			<h2>16 Hooks - useEffect y el Ciclo de Vida</h2>
			<p>ScrollY del Navegador { scrollY}px</p>
		</>
	);
}