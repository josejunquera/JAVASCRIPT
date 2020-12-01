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
//   array.push(Math.floor(Math.random() * 10));
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

// STRING Y ARRAYS

// El usuario ingrese un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: "1,2,3,4,5" y se convierte en [1,2,3,4,5])

// Convertir un array ingresado dentro del código en un string (existe un método en javascript para hacerlo)

// Unión, intersección y conteo
// Existen dos arrays, cada uno con 5 palabras, generar un nuevo array con la intersección de ambos elementos. (Ejemplo: [1,2,3] unión [1,2,4] = [1,2]

// Existen dos arrays, cada uno con 5 palabras, generar un nuevo array con la unión de ambos elementos, (Ejemplo: [1,2,3] unión [1,2,4] = [1,1,2,2,3,4]

// El usuario ingresa dos conjuntos de números separados por coma, el programa debe determinar si ambos conjuntos tienen la misma cantidad de números.

// El usuario ingresa dos conjuntos de números separados por coma, si ambos conjuntos tienen la misma cantidad de elementos mostrar un arreglo que contenga la suma de cada elemento. (Ejemplo: [1,2,3] + [2,3,4] = [3,5,7])

// Filtrando datos en arreglo
// Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con solo los números pares, hint: utilizar reduce()

// Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo que contenga solo las palabras que empiezan con una vocal.

// ORDENAMIENTO

// Crear un método que permite intercambiar las posiciones de dos elementos de un arreglo en base a sus índices ej:

//  arr = [1,2,3]
//  swap(arr, 0, 1)
//  console.log(arr) // [2,1,3]
// Realizar el mismo ejercicio anterior pero que en esta ocasión devuelva un arreglo nuevo con los datos cambiados.

//  arr = [1,2,3]
//  new_arr = swap(arr, 0, 1)
//  console.log(arr) // [1,2,3]
//  console.log(new_arr) // [2,1,3]
// Crear una función que reciba un arreglo y que cree uno nuevo con todos los elementos ordenados de menor a mayor, (sin ocupar el método .sort)

// Crear una función que reciba un arreglo y que cree uno nuevo con todos los elementos ordenados de mayor a menor.

// ARREGLOS DE ARREGLOS

// Crear una función que permite aplanar un arreglo dado, Ejemplo:

//  var arr = [[1,2,3],[4,5,6],[7,8,9]];
//  console.log(aplanar(arr)); // [1,2,3,4,5,6,7,8,9]
// Crear una función que divida un arreglo en dos partes con la misma cantidad de elementos (o una diferencia de máximo un elemento) y devuelva un arreglo que contenga al grupo1 y al grupo2

//  var arr = [1,2,3,4,5,6,7,8];
//  console.log(split(arr)); // [[1,2,3,4], [5,6,7,8]]
