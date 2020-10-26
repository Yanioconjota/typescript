(() => {
  const miFuncion = function (a: string) {
    return a.toLocaleUpperCase();
  }

  const miFuncionF = (a: string) => a.toLocaleUpperCase();

  console.log(miFuncion('normal'));
  console.log(miFuncionF('flecha'));

  const sumarN = function (a: number, b: number) {
    return a + b;
  }

  const sumarF = (a: number, b: number) => a + b;

  console.log('Función normal:', sumarN(5, 2));
  console.log('Función flecha:', sumarF(5, 2));

  const hulk = {
    nombre: 'Hulk',
    smash() {
      setTimeout(() => {
        console.log(`${this.nombre} smash!!!`);
      }, 1000);
    }
  }
  hulk.smash();

})();