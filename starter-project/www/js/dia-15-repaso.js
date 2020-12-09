'use strict';

const numeros = [9, 8, 7, 6, 5, 4];
const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

function numberExist(numero) {
  return numero === numero;
}

const existe = numeros.includes(9);
console.log(existe);

function esPar(numero) {
  return numero % 2 === 0;
}

//every,some,find,findindex,filter,map

// const algunoEsPar = numeros.every(esPar);
// console.log(algunoEsPar);

// const todosSonPar = numerosPares.every(esPar);
// console.log(todosSonPar);

// const buscarPar = numeros.find(esPar);
// console.log(buscarPar);

// const findIndex = numeros.indexOf(7);
// console.log(findIndex);

// const filterNum = numeros.filter(esPar);
// console.log(filterNum);

// const mapNumeros = numeros.map((x) => x * 2);
// console.log(mapNumeros);

// const itemNames = ['Camisa', 'Pantalon', 'Calcetines'];
// const itemPrices = [13, 27, 100];

// const items = itemNames.map((value, index) => {
//   const tempItem = { name: itemNames[index], price: itemPrices[index], ammount: 1 };
//   return tempItem;
// });

// console.log('ITEMS', items);

// const totalPrice = itemPrices.reduce((accumulator, currentvalue) => {
//   return accumulator + currentvalue;
// });

// console.log(totalPrice);
