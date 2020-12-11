/* #################
 * ## Ejercicio 5 ##
 * #################
 *
 * Crea un array de caracteres que contenga letras de la ‘A’ a la ‘Z’ (solo las mayúsculas). Después, ve pidiendo
 * posiciones del array por teclado y si la posicion es correcta, se añadirá a una cadena que se mostrará al final.
 * Dejaremos de insertar cuando se introduzca un -1.
 *
 * Por ejemplo:
 *
 *  0 --> Añadirá la ‘A’
 *  5 --> Añadirá la ‘F’
 *  25 --> Añadirá la ‘Z’
 *  50 --> Error, inserte otro numero
 *  -1 --> Fin
 *
 * Cadena resultante: AFZ
 *
 *
 */

let alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function returnNumbers() {
  const value = prompt("Entern number between 0 and 25 , -1 to return array");
  let aux = [];
  while (value > 0 && value < 25) {
    aux.push(alphabet[value - 1]);
  }
  if (value < 0) {
    return aux;
    console.log(aux);
  }
}

console.log(returnNumbers());

// const numero = prompt("hahashs");

// console.log(numero);
