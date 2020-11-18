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
//   if (numero % i === 0) {
//     esPrimo = false;
//   }
// }

// if (esPrimo) {
//   console.log(numero);
//   console.log('Es primo.');
// } else {
//   console.log(numero);
//   console.log('No es primo.');
// }

const numero = 59;
let esPrimo = true;

for (let x = 2; x < numero; x++) {
  console.log('Resto' + ' ' + (numero % x));

  if (numero % x === 0) {
    esPrimo = false;
  }
}

if (esPrimo) {
  console.log('Es primo');
} else {
  console.log('No es primo');
}
