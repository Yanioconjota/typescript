(() => {
  let getEdad = () => 100 + 98;
  const nombre = 'James';
  const apellido = 'Howlett';
  const edad = 198;
  /*Imprimir:
  James
  Howlett
  (Edad: 198)*/
  const salida = `
	${nombre}
	${apellido}
	(Edad: ${getEdad()})`;
  console.log(salida);

})();