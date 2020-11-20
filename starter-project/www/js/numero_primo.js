'use strict';

// const numero = 9;
// let esPrimo = true;

// // Empezamos directamente en "2" porque todos los números son divisibles entre "1". Del mismo modo omitimos
// // al propio número (el 7) con el "menor que" en la condición.
// for (let i = 2; i < numero; i++) {
//   // Este "console.log" es para ayudaros a ver qué pasa en cada repetición. La sintaxis puede resultar
//   // un tanto extraña pero no te preocupes, no tienes por qué entender esto a estas alturas.
//   console.log(`En esta repetición compruebo el resto de ${numero} / ${i}.`);
//   console.log(numero % i);

//   // Comprobamos si el resto es igual a 0. Si lo es, cambiamos la variable "esPrimo" a "false".

/*
  - Hacer una funcion que diga si un número es divisible entre otro
    Para esto podeis usar el operador de modulo
    Esta función devuelve true si es divisible y false si no es divisible
    Un numero es divisible entre otro cuando el resto de su division es 0

    - Otra funcion que puede usar la que acabamos de hacer y que diga si un numero es primo o no
  va a devolver true si es primo y false si no es primo
  Un numero es primo si solo es divisible entre 1 y el mismo
  Solo probamos numeros enteros, numeros >0. A mi me vale si asumis que el numero siempre va a ser >=2

    - Una ultima funcion que saca los numeros primos hasta el 100
  */

// function calculadoraPrimos(numero) {
//   let esPrimo = true;
//   for (let x = 2; x < numero; x++) {
//     // console.log('Resto ' + (numero % x));
//     if (numero % x === 0) {
//       esPrimo = false;
//     }
//   }
//   if (esPrimo === true) {
//     console.log(numero + ' es primo');
//   } else {
//     console.log(numero + ' no es primo');
//   }
// }
// calculadoraPrimos(10);

// function contadorPrimos(numero) {
//   for (let contador = 0; contador <= numero; contador++) {
//     let esPrimo = true;
//     for (let x = 2; x < contador; x++) {
//       if (contador % x === 0) {
//         esPrimo = false;
//       }
//     }
//     if (esPrimo === true) {
//       console.log(contador);
//     }
//   }
// }
// contadorPrimos(10);

function calculadoraPrimos(numero) {
  let esPrimo = true;
  for (let x = 2; x < numero; x++) {
    // console.log('Resto ' + (numero % x));
    if (numero % x === 0) {
      esPrimo = false;
    }
  }
  if (esPrimo === true) {
    return true;
  } else {
    return false;
  }
}
calculadoraPrimos();

function contadorPrimos(numero) {
  for (let contador = 0; contador <= numero; contador++) {
    if (calculadoraPrimos(contador) === true) {
      console.log(contador + ' es primo');
    }
  }
}
contadorPrimos(100);
