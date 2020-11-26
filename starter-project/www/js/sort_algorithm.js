'use strict';

let arrayUnsorted = [55, 74, 87, 42, 19, 12, 25, 33, 26];

// FUNCIÓN SORT

// array.sort((a, b) => {
//   return a - b;
// });
// console.log(array);

// BUBBLE SORT

// function sortBubble(array) {
//   for (let i = 0; i < array.length; i++) {
//     //   console.log(i);
//     for (let j = 0; j < array.length; j++) {
//       // console.log(j);
//       if (array[j] > array[j + 1]) {
//         let aux = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = aux;
//       }
//     }
//   }
//   return array;
// }
// console.log(sortBubble(array));

// INSERTION SORT

function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(i);
    console.log(array[i]);
    let value = array[i];
    let index = i;
    while (index > 0 && array[index - 1] > value) {
      array[index] = array[index - 1];
      index = index - 1;
      array[index] = value;
    }
  }
  return array;
}
console.log(insertionSort(arrayUnsorted));

// IDEA ALGORITMO
// crear una copia e insertar solo el menor
// insertar randoms solo si son mayores que el que ya hay...
