'use strict';

let array = [55, 74, 87, 42, 19, 12, 25, 33, 26];

for (let i = 0; i < array.length; i++) {
  //   console.log(i);
  for (let j = 0; j < array.length; j++) {
    // console.log(j);
    if (array[j] > array[j + 1]) {
      let aux = array[j];
      array[j] = array[j + 1];
      array[j + 1] = aux;
    }
  }
  console.log(array);
}
