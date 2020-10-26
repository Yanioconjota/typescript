(() => {
  //Parámetros: 1- Obligatorios | 2- Opcionales | 3- Por defecto
  function activar(nombre: string,
    momento?: string,
    objeto: string = 'batiseñal') {
    if (momento) {
      console.log(`${nombre} activó la ${objeto} en la ${momento}`);
    } else {
      console.log(`${nombre} activó la ${objeto}`);
    }
  }
  activar('Gordon');
  activar('Gordon', 'tarde');
  activar('Gordon', 'noche', 'batiseñal');
})();