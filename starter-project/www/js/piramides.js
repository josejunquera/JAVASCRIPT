'use strict';

// PIRAMIDE 0

// const numeroPisos = 5;

// for (let i = 1; i <= numeroPisos; i++) {
//   console.log(i);
// }

// PIRAMIDE 1

// function generarPiramide(numeroPisos) {
//   let space = '';
//   for (let i = 1; i <= numeroPisos; i++) {
//     console.log((space += '*'));
//   }
// }
// generarPiramide(5);

// // PIRAMIDE 2

function generarPiramide(numeroPisos) {
  for (let i = 0; i < numeroPisos; i++) {
    let piso = 'x';
    // console.log(i);
    for (let j = 1; j <= numeroPisos - i; j++) {
      piso = piso + 'y';
      // console.log(j);
    }
    for (let k = 1; k <= i + 1; k++) {
      piso = piso + '*';
      console.log(k);
    }
    console.log(piso);
  }
}

generarPiramide(5);

// /*¿Por qué incrementa solo x o y en cada bucle y no (piso + x) o (piso + y)?

// // PIRAMIDE 3

// function generarPiramide(numeroPisos) {
//   for (let i = 0; i < numeroPisos; i++) {
//     let piso = '';
//     for (let j = 1; j <= numeroPisos - i; j++) {
//       piso = piso + ' ';
//     }
//     for (let k = 1; k <= 2 * i + 1; k++) {
//       piso = piso + '*';
//     }
//     console.log(piso);
//   }
// }

// generarPiramide(5);

// PIRAMIDE PASCU

// function generarPiramide(base) {
//   for (var i = 1; i < base; i++) {
//     let fila = '';
//     for (var j = 0; j < base; j++) {
//       if (j < base - i) {
//         fila += ' ';
//       } else {
//         fila += '*';
//       }
//     }
//     console.log(fila);
//   }
// }

// generarPiramide(6);
