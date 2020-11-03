(() => {
  const sumar = (a: number, b: number): number => a + b;

  const nombre = ():string => 'Hola Nombre';

  const obtenerSalario = ():Promise<string> => {
    return new Promise((resolve, reject)=>{
      resolve('Nombre');
    });
  }

  obtenerSalario().then(a => console.log( a.toUpperCase() ) );

})();