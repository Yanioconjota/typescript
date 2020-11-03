(() => {

  // Uso de Let y Const
  const nombre:string = 'Ricardo Tapia';
  const edad:number = 23;

  const PERSONAJE = {
    nombre,
    edad
  };


  // Cree una interfaz que sirva para validar el siguiente objeto
  interface Batman {
    nombre: string;
    artesMarciales: string[];
  }

  const batman: Batman = {
    nombre: 'Bruno Díaz',
    artesMarciales: ['Karate', 'Aikido', 'Wing Chun', 'Jiu-Jitsu']
  }

  console.log(batman);
  

  // Convertir esta funcion a una funcion de flecha
  let resultadoDoble = (a:number, b:number):number => {
    return (a + b) * 2;
  }

  console.log(resultadoDoble(2,2));
  

  // Función con parametros obligatorios, opcionales y por defecto
  // donde NOMBRE = obligatorio
  //       PODER  = opcional
  //       ARMA   = por defecto = 'arco'
  const getAvenger = (nombre: string, poder?: string, arma: string='arco') => {
    let mensaje:string;
    if (poder) {
      mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
      console.log(mensaje);
      
    } else {
      mensaje = nombre + ' tiene un ' + poder;
      console.log(mensaje);
      
    }
  };

  getAvenger('Capi', 'Droga', 'Escudo');
  getAvenger('Antman', 'Tamaño');
  
  // Cree una clase que permita manejar la siguiente estructura
  // La clase se debe de llamar rectangulo,
  // debe de tener dos propiedades:
  //   * base
  //   * altura
  // También un método que calcule el área  =  base * altura,
  // ese método debe de retornar un numero.

  class Rectangulo {
    constructor(public base: number, public altura: number){}

    area = ():number => {
      return this.base * this.altura;
    }
  }

  const calculo = new Rectangulo(4,2);
  console.log('area:', calculo.area());
  

})();