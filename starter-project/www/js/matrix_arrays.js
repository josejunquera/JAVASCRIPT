'use strict';

const matrix = [
  ['*', '*', '*'],
  ['*', '*', '*'],
  ['*', '*', '*'],
];

// matrix[1][2] = 'X';
// console.log(matrix);

//FUNCIÓN INSERTAR SIMBOLOS PRIMERA DIAGONAL

// function insertSymbol(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j <= i; j++) {
//       array[i][i] = 'X';
//     }
//   }
//   return array;
// }
// console.log(insertSymbol(matrix));

//FUNCIÓN INSERTAR SIMBOLOS SEGUNDA DIAGONAL

// function insertSymbol(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j <= i; j++) {
//       array[i][array.length - i - 1] = 'X';
//     }
//   }
//   return array;
// }
// console.log(insertSymbol(matrix));

//CREAR UNA MATRIX DE X*Y

function createSquareMAtrix(filasColumnas) {
  let matrix = [];
  for (let i = 0; i < filasColumnas; i++) {
    matrix[i] = [];
    for (let j = 0; j < filasColumnas; j++) {
      matrix[i][j] = '*';
    }
  }
  return matrix;
}

// FUNCIÓN INSERTAR SIMBOLOS EN AMBAS DIAGONALES

function insertSymbol(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j <= i; j++) {
      array[i][i] = 'X';
    }
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j <= i; j++) {
        array[i][array.length - i - 1] = 'X';
      }
    }
  }
  return array;
}
console.log(insertSymbol(createSquareMAtrix(7)));
