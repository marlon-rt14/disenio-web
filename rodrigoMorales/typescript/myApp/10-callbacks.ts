
function imprimir(
	a: number,
	b: number,
	sumar: (valor: number) => void
): void {
  let resultado = a + b;
  sumar(resultado);
}

imprimir(3, 2, (x) => {
	console.log(x);
})
