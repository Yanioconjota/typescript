"use strict";
(() => {
    // Uso de Let y Const
    const nombre = 'Ricardo Tapia';
    const edad = 23;
    const PERSONAJE = {
        nombre,
        edad
    };
    const batman = {
        nombre: 'Bruno Díaz',
        artesMarciales: ['Karate', 'Aikido', 'Wing Chun', 'Jiu-Jitsu']
    };
    console.log(batman);
    // Convertir esta funcion a una funcion de flecha
    let resultadoDoble = (a, b) => {
        return (a + b) * 2;
    };
    console.log(resultadoDoble(2, 2));
    // Función con parametros obligatorios, opcionales y por defecto
    // donde NOMBRE = obligatorio
    //       PODER  = opcional
    //       ARMA   = por defecto = 'arco'
    const getAvenger = (nombre, poder, arma = 'arco') => {
        let mensaje;
        if (poder) {
            mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
            console.log(mensaje);
        }
        else {
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
        constructor(base, altura) {
            this.base = base;
            this.altura = altura;
            this.area = () => {
                return this.base * this.altura;
            };
        }
    }
    const calculo = new Rectangulo(4, 2);
    console.log('area:', calculo.area());
})();
