/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Dado el array = [1, 3, 9, 14, 17, 22]
 * 
 *  - Iterar por todos los elementos dentro de un array utilizando "while" y mostrarlos en pantalla.
 *
 *  - Iterar por todos los elementos dentro de un array utilizando "for" y mostrarlos en pantalla.
 *
 *  - Iterar por todos los elementos dentro de un array utilizando "for of" y mostrarlos en pantalla.
 *
 *  - Mostrar todos los elementos dentro de un array sumándole uno a cada uno. 
 *
 *  - Generar otro array con todos los elementos del primer array incrementados en 1. ¿Con el método push?
 *
 *  - Calcular el promedio.
 * 
*/

const nums = [1, 3, 9, 14, 17, 22];

let position = 0;

/* while (position < nums.length) {
    console.log(nums[position]);
    position++;
} */

/* for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
} */

/* for (const value of nums) {
    console.log(value);
} */

/* for (const value of nums) {
    console.log(value + 1);
} */

const nums_2 = [];

/* for (const value of nums) {
    nums_2.push(value + 1);
} */

let total = 0;

for (let i = 0; i < nums.length; i++) {
    total += nums[i];
}

console.log(total/nums.length);