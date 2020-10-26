(() => {
	// function saludar(nombre: string) {
	// 	console.table('Hola ' + nombre); // Hola Logan
	// }
	// const wolverine = {
	// 	nombre: 'Logan'
	// };
	// saludar(wolverine.nombre);

	let mensaje: string = 'Hola';
	let numero: number = 123;
	let booleano: boolean = true;
	let hoy: Date = new Date();

	let cualquiercosa;
	cualquiercosa = mensaje;
	cualquiercosa = numero;
	cualquiercosa = booleano;
	cualquiercosa = hoy;

	let cualquierStringNumero: string | number;
	cualquierStringNumero = mensaje;
	cualquierStringNumero = numero;

	let spiderman = {
		nombre: 'Peter Parker',
		edad: 32
	}

	/*internamente typescript haces esto:
	let spiderman: {
		nombre: string,
		edad: number
	}*/

	spiderman = {
		nombre: 'Miles Morales',
		edad: 17
	}
})();