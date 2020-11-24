'use strict';

/*
  Quiero hacer una funcion que admita de parametro un array de pacientes
  La funcion devuelve los que estan infectados al dia siguiente
  Pero no modifica los que estaban infectados originalmente
  Si alguien esta infectado, al dia siguiente estan infectados los que estan justo al lado
*/

// const patients = [true, false, true, false, false, false, true, true];
// const infected = [true, true, true, true, false, true, true, true];

// let i = 2;
// // console.log(patients[i - 1]);

// if (patients[i] === true) {
//   patients[i - 1] = true;
//   patients[i + 1] = true;
// }

// for (let i = 0; i < 5; i++) {
//   if (patients[i]) {
//     patients[i - 1] = true;
//     patients[i + 1] = true;
//   }
// }
// console.log(patients);

// for (let i = 0; i < 8; i++) {
//   if (patients[i]) {
//     patients[i - 1] = true;
//     patients[i + 1] = true;
//   }
// }

// i tiene que ser >0 y < lenght para poder infectar

// Funcion con un unico parametro de entrada --> Array
function infectados(unArray) {
  // Copiamos el array en una nueva variable
  let infected = unArray.slice();
  // Flag para saber si el valor actual se ha modificado en el instante +1
  let anteriorChanged = false;
  // Recorremos el Array (copiado) desde la posicion 0 a la posicion infected.length-1
  for (let i = 0; i < infected.length - 1; i++) {
    // Valor de la posicion actual del array infected
    let actual = infected[i];
    // Valor de la posicion siguiente del array infected
    let siguiente = infected[i + 1];
    // Si i es la primera posicion
    if (i === 0) {
      if (!actual && siguiente) {
        // Ponemos a true el valor actual + Indicamos que el valor actual ha sido cambiado para tenerlo en cuenta en la iteracion siguiente
        anteriorChanged = true;
        infected[i] = true;
      }
      // Si i > 0
    } else {
      // Definimos el valor anterior porque en este punto podemos obtenerlo
      let anterior = infected[i - 1];
      // Si actual === false
      if (!actual) {
        // Comprobamos si el valor anterior al actual se ha modificado en la iteracion anterior
        if (!anteriorChanged) {
          // Si el valor anterior no se ha cambiado --> Comprobamos si es true el valor anterior o el valor siguiente al actual
          if (anterior || siguiente) {
            // Ponemos a true el valor actual + Indicamos que el valor actual ha sido cambiado para tenerlo en cuenta en la iteracion siguiente
            anteriorChanged = true;
            infected[i] = true;
          }
          // Si el valor anterior ha sido modificado en la iteracion anterior + Comprobamos si el valor siguiente === true
        } else if (siguiente) {
          // Ponemos a true el valor actual + Indicamos que el valor actual ha sido cambiado para tenerlo en cuenta en la iteracion siguiente
          infected[i] = true;
          // Ponemos el flag a false
        } else {
          anteriorChanged = false;
        }
        // Si actual === true
      } else {
        anteriorChanged = false;
      }
    }
  }
  // Retornamos el nuevo array que hemos modificado dentro de la funcion
  return infected;
}

// Llamada a la funcion
const patients = [true, false, true, false, false, false, true, true];
// const infected = [true, true, true, true, false, true, true, true];
let infected = infectados(patients);
console.log(infected);
