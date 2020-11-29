'use strict';
/*
Recuperar los datos de la casa Targaryen de de la API de Game of Thrones, de esta casa deberemos averiguar cual es el Lord actual (almacenado en currentLord) y recuperar sus datos, los del lord.

Del lord actual debemos sacar por la consola el nombre (name), y los titulos (titles) cada uno en una linea por consola.

Enlace para hacer fetch https://www.anapioficeandfire.com/api/houses/378
*/

const url = 'https://www.anapioficeandfire.com/api/houses/378';

// let casaTargaryen = fetch(url).then((response) => {
//   const valuePromise = response.json();
//   valuePromise.then((value) => {
//     return value;
//   });
// });

// console.log(casaTargaryen);

// fetch(url)
//   .then(function (response) {
//     // el parámetro response tiene datos sobre la propia petición, no el dato que hemos pedido al servidor
//     console.log(response);
//     // El dato que queremos nos lo devuelve el método json y lo devuelve como una Promise, si hacemos return podemos encadenar otro then en el que sólo trataremos con el propio dato que hemos pedido
//     return response.json();
//   })
//   .then(function (data) {
//     // En este parámetro data tenemos el dato que hemos pedido al servidor
//     console.log(data);
//   });

// fetch(url)
//   .then(function (response) {
//     // el parámetro response tiene datos sobre la propia petición, no el dato que hemos pedido al servidor
//     // console.log(response);
//     // El dato que queremos nos lo devuelve el método json y lo devuelve como una Promise, si hacemos return podemos encadenar otro then en el que sólo trataremos con el propio dato que hemos pedido
//     return response.json();
//   })
//   .then(function (house) {
//     // En este parámetro data tenemos el dato que hemos pedido al servidor
//     console.log(house);
//     fetch(house.currentLord)
//       .then((response) => {
//         return response.json();
//       })
//       .then((lord) => {
//         console.log(lord.name);
//       });
//   });

// OTRA FORMA

// async function getCurrentLordName() {
//   const url = 'https://www.anapioficeandfire.com/api/houses/378';
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);

//   const dataEnUnPaso = await (await fetch(url)).json();
//   console.log(dataEnUnPaso);
// }

// function fetchData(url) {
//   return fetch(url).then((response) => {
//     return response.json();
//   });
// }

// fetchData(url).then((value) => {
//   console.log(value);
// });
// const url = 'https://anapioficeandfire.com/api/characters/583';

async function getCurrentLordName() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  const responseData = await fetch(data.currentLord);
  const dataData = await responseData.json();
  console.log(dataData);
}

getCurrentLordName();
