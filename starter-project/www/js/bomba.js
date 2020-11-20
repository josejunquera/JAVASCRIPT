// const pedirDato = prompt('ola');

// // promt siempre entra como texto

// const pedirNumero = +prompt(5);

/*
  Quiero hacer una función para desactivar una bomba
  La bomba nos va a dar 5 intentos para desactivar
  Cada intento nos lo pide por el prompt
  Si conseguimos desactivar la bomba saca un mensaje por la consola y no pide mas intentos
  Si agotamos todos los intentos explota
*/

// console.log(Math.random() * 10);
// console.log(Math.round(Math.random() * 10));

// Math.floor redondear hacia abajo
// Math.ceil redondear hacia arriba

// const aleatorio = Math.round(Math.random() * 10);

// console.log(aleatorio);

// function defuse() {
//   for (let i = 1; i <= 5; i++) {
//     console.log('Code');
//     if (+prompt('Code to defuse') === 5) console.log('Bomb defused');
//     else console.log('Boom!');
//   }
// }

// defuse();

function defuse() {
  for (let i = 1; i <= 5; i++) {
    if (+prompt('Code to defuse') === 5) return console.log('Bomb defused');
    else alert('Not defused!');
  }
}

defuse();
