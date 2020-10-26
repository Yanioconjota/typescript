(() => {
  //Para este ejercicio cambiar "target": "es5" --> "target": "es6",en tscongig, después retornarlo a es5
  console.log('Inicio');

  const prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Se acabó el timeout');
    }, 1000);
  });

  prom1
    .then(mensaje => console.log(mensaje))
    .catch(err => console.warn(err));

  console.log('Fin');
})();