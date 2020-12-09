'use strict';
// ARRAY

// Dado el array = [1,2,3,4,5,6]

// Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla.

// let array = [1, 2, 3, 4, 5, 6];
// let i = 0;

// while (i < array.length) {
//   console.log(array[i]);
//   i++;
// }

// Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla.

// let array = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos en pantalla.

// let array = [1, 2, 3, 4, 5, 6];

// array.forEach((item) => console.log(item));

// Mostrar todos los elementos dentro de un array sumándole uno a cada uno.

// let array = [1, 2, 3, 4, 5, 6];

// let arrayDouble = array.map((x) => x * 2);

// console.log(arrayDouble);

// arrayDouble.forEach((item) => console.log(item));

// Generar una copia de un array pero con todos los elementos incrementado en 1.

// let array = [1, 2, 3, 4, 5, 6];

// let arrayCopy = [...array].map((x) => x + 1);

// console.log(arrayCopy);

// Calcular el promedio

// let array = [1, 2, 3, 4, 5, 6];

// array.forEach((item) => console.log(item));

// const reducer = (accumulator, value) => accumulator + value;

// console.log(array.reduce(reducer) / array.length);

// Crear un array vacío, luego generar 20 números al azar y guardarlos en un array.

// let array = [];

// for (let i = 0; i < 20; i++) {
//   array.push(Math.floor(Math.random() * 100));
// }
// console.log(array);

// Crear un array vacío, luego generar N números al azar y guardarlos en un array, N es introducido por el usuario a través de un prompt.

// let array = [];
// let number = prompt('Enter number');
// function generateAmount(number) {
//   for (let i = 0; i < number; i++) {
//     array.push(Math.floor(Math.random() * 10));
//   }
// }
// generateAmount(number);
// console.log(array);

// Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.

// let array = ['azul', 'amarillo', 'rojo', 'verde', 'café', 'rosa'];

// let color = prompt('Enter color');

// if (array.includes(color)) alert('Si existe el color en el array');
// else alert('No existe el color en el array');

// EJEMPLO MAP

// const people = [
//   {
//     name: 'John',
//     lastName: 'Doe',
//   },
//   {
//     name: 'Jane',
//     lastName: 'McKain',
//   },
// ];

// const names = people.map((person) => `${person.name} ${person.lastName}`);

// const names = people.map((person) => person.name + ' ' + person.lastName);

// console.log(names);

// EJEMPLO FILTER

// let array = [1, 2, 3, 4, 5, 6];

// const filtered = array.filter((x) => x < 2);
// console.log(filtered);

// EJEMPLO REDUCE

// let array = [1, 2, 3, 4, 5, 6];

// let reduced = array.reduce((total, value) => total + value);
// console.log(reduced);

// EJEMPLOS FOR IN Y FOR OF

// const posts = {
//   id: 1,
//   title: 'Post Title',
//   body: 'Post Body',
// };

// for (let post in posts) {
//   console.log(posts[post]);
// }
// //devuelve 1, Post Title , Post Body

// const numbers = [1, 3, 5, 7, 9];

// for (let number in numbers) {
//   console.log(number);
// }
// //devuelve los indices 0,1,2,3,4 no los valores del indice

// for (let number of numbers) {
//   console.log(number);
// }

// //devuelve los numeros del array 1,3,5,7,9
