(() => {
  const avenger = {
    nombre: 'Steve Rogers',
    clave: 'Capitán América',
    poder: 'Droga'
  }

  const avenger2 = {
    nombre: 'Tony Stark',
    clave: 'Iron Man',
    poder: 'Dinero'
  }

  // console.log(avenger.nombre);
  // console.log(avenger.clave);
  // console.log(avenger.poder);

  // const {nombre, clave, poder } = avenger;

  //Desestructuración de un objeto
  const extraer = ({ nombre, poder, clave }: any) => {
    console.log(nombre);
    console.log(clave);
    console.log(poder);
  }

  const { nombre, clave, poder } = avenger;
  console.log(nombre, clave, poder);
  extraer(avenger2);

  const avengers: string[] = ['Thor', 'Iron Man', 'Spiderman'];
  const xmen: string[] = ['Ciclops', 'Gambit', 'Wolverine'];
  const fantastic4: string[] = ['Mr. Fantastic', 'Invisible Woman', 'Human Torch', 'The Thing'];

  //Desestructuración de un array
  const [Hemsworth, Downey, Holland] = avengers;
  const [, , Jackman] = xmen;
  //Indistintamente del nombre, cada item en la desestructuración apunta a una posición del array que le asignamoss

  // console.log(avengers[0]);
  // console.log(avengers[1]);
  // console.log(avengers[2]);

  const extraerArr = ([Reed, Sue, Johnny, Ben]: string[]) => {
    console.log(Reed);
    console.log(Sue);
    console.log(Johnny);
    console.log(Ben);
  }

  extraerArr(fantastic4);

  console.log(avengers);
  console.log(Hemsworth);
  console.log(Downey);
  console.log(Holland);
  console.log(Jackman);
})();