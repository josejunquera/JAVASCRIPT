'use strict';

/*
  Quiero hacer una funcion que admita de parametro un array de pacientes
  La funcion devuelve los que estan infectados al dia siguiente
  Pero no no modifica los que estaban infectados originalmente
  Si alguien esta infectado, al dia siguiente estan infectados los que estan justo al lado

  Otro virus
  Infecta igual que el anterior,
  la diferencia es que el que estaba inicialmente infectado al dia siguiente esta sano
  */

// const patients = [true, false, true, false, false, false, true, true];
// const infected = [true, true, true, true, false, true, true, true];

// const infected2 = [false, true, false, true, false, true, false, false];

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
      //Si el valor actual es true lo cambiamos a false e indicamos que ha sido cambiado para tenerlo en cuenta en iteraciones siguientes.
      if (actual) {
        infected[i] = false;
        anteriorChanged = true;
      }
      //Si el valor actual es false, indicamos que no ha sido modificado para iteraciones siguientes.
      else {
        anteriorChanged = false;
      }
      // console.log(anteriorChanged);
      // Si i > 0
      // ---------------------------------------------------
    } else {
      // Definimos el valor anterior porque en este punto podemos obtenerlo
      let anterior = infected[i - 1];
      // Comprobamos si se ha modificado el valor anterior
      console.log(i);
      console.log(anteriorChanged);
      console.log('------------------');
      if (anteriorChanged) {
        //Si el valor anterior fue cambiado y ahora es false, el valor actual pasa a ser true.Indicamos que valor actual se ha cambiado para siguientes iteraciones.
        infected[i] = true;
        anteriorChanged = true;
        //Si anterior fue cambiado y es true, no cambia el valor actual y se indica que no se ha cambiado para siguientes iteraciones.

        // anteriorChanged = false;
        // } else {
        // }
      }
    }
    // ---------------------------------------------------
  }
  // Retornamos el nuevo array que hemos modificado dentro de la funcion
  return infected;
}

// Llamada a la funcion
const patients = [true, false, true, false, false, false, true, true];
// const infected2 = [false, true, false, true, false, true, false, false];
let a = infectados(patients);
console.log(a);
