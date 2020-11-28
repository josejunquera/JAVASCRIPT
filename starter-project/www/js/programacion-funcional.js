'use strict';

const persons = [
  {
    name: 'Pedro',
    age: 35,
    country: 'ES',
    infected: true,
    pet: 'Troski',
  },
  {
    name: 'Elisabeth',
    age: 14,
    country: 'UK',
    infected: true,
    pet: 'Firulais',
  },
  {
    name: 'Pablo',
    age: 25,
    country: 'ES',
    infected: false,
    pet: 'Berritxu',
  },
  {
    name: 'Angela',
    age: 18,
    country: 'DE',
    infected: false,
    pet: 'Noodle',
  },
  {
    name: 'Boris',
    age: 50,
    country: 'UK',
    infected: true,
    pet: 'Leon',
  },
  {
    name: 'Donald',
    age: 69,
    country: 'US',
    infected: false,
    pet: 'Pence',
  },
];

const pets = [
  {
    name: 'Troski',
    animal: 'perro',
  },
  {
    name: 'Firulais',
    animal: 'perro',
  },
  {
    name: 'Berritxu',
    animal: 'loro',
  },
  {
    name: 'Noodle',
    animal: 'araña',
  },
  {
    name: 'Leon',
    animal: 'gato',
  },
  {
    name: 'Pence',
    animal: 'perro',
  },
];

const animals = [
  {
    name: 'perro',
    legs: 4,
  },
  {
    name: 'araña',
    legs: 8,
  },
  {
    name: 'gato',
    legs: 4,
  },
  {
    name: 'loro',
    legs: 2,
  },
  {
    name: 'gallina',
    legs: 2,
  },
];

// Población en millones
const countries = [
  {
    code: 'CN',
    name: 'China',
    population: 1439,
    infected: 81999,
  },
  {
    code: 'US',
    name: 'Estados Unidos',
    population: 331,
    infected: 112468,
  },
  {
    code: 'DE',
    name: 'Alemania',
    population: 83,
    infected: 56202,
  },
  {
    code: 'ES',
    name: 'España',
    population: 46,
    infected: 72248,
  },
  {
    code: 'UK',
    name: 'Reino Unido',
    population: 67,
    infected: 17301,
  },
];

/**
 * EJERCICIOS
 */

// NUMERO TOTAL DE INFECTADOS ARRAY DE PERSONAS --> filter y luego reduce

// let infectedPeople = persons.filter((person) => {
//   return person.infected === true;
// });

// let totalInfected = infectedPeople.reduce((accumulator, person) => {
//   return accumulator + 1;
// }, 0);

// console.log(totalInfected);
// console.log('Total infectados ' + infectedPeople.length); ---ÑAPA---

// NUMERO TOTAL DE SANOS ARRAY DE PERSONAS

// let healthyPeople = persons.filter((person) => {
//   return person.infected !== true;
// });

// console.log(healthyPeople);
// console.log('Total sanos ' + healthyPeople.length);

// NUMERO TOTAL DE SANOS ARRAY DE PAISES

// const sumaInfectados = countries.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue.infected;
// }, 0);

// console.log('Total infectados ' + sumaInfectados);

// const sumaSanos = countries.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue.population;
// }, 0);

// // console.log('Total millones sanos ' + sumaSanos);

// let sanosReal = sumaSanos * 1000000;

// console.log('Total sanos ' + sanosReal);

// console.log(sanosReal - sumaInfectados);

// NUMERO TOTAL DE INFECTADOS EN LOS PAISES DEL ARRAY DE PAISES

// const sumaInfectados = countries.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue.infected;
// }, 0);

// console.log(sumaInfectados);

// PAIS CON MAS INFECTADOS DEL ARRAY DE PAISES

// countries.sort((productA, productB) => {
//   return productB.infected - productA.infected;
// });

// console.log(countries[0].name);

// *** NUMERO TOTAL DE INFECTADOS DEL ARRAY DE PERSONAS

// let infectedPeople = persons.filter((person) => {
//   return person.infected === true;
// });

// console.log(infectedPeople);
// console.log('Total infectados ' + infectedPeople.length);

// *** ARRAY CON EL NOMBRE DE TODAS LAS MASCOTAS

// let petNames = pets.map((pets) => {
//   return pets.name;
// });

// console.log(petNames);

// const personsWithAnimal = persons.map((person) => {
//   const personCopy = { ...person };

//   const foundPet = pets.find(() => {
//     return pet.name === personCopy.pet;
//   });

//   if (foundPet) {
//     personCopy.animalPet = foundPet.animal;
//   }

//   return personCopy;
// });

// console.log(personCopy);

// ARRAY CON LAS PERSONAS INFECTADAS DEL ARRAY PERSONAS

// let infectedPeople = persons
//   .filter((person) => {
//     return person.infected === true;
//   })
//   .map((person) => {
//     return person.name;
//   });

// console.log(infectedPeople);

// ARRAY DE ESPAÑOLES CON PERRO

// const personsWithAnimal = persons.map((person) => {
//   const personCopy = { ...person };
//   const animal = pets.find((animal) => {
//     return personCopy.pet === animal.name;
//   });s
//   console.log(animal);
//   personCopy.petData = animal;
//   return personCopy;
// });

// NUMERO DE PERSONAS INFECTADAS DEL ARRAY PERSONAS

// let infectedPeople = persons
//   .filter((person) => {
//     return person.infected === true;
//   })
//   .map((person) => {
//     return person.name;
//   });

// console.log(infectedPeople);
// console.log('Total personas infectadas ' + infectedPeople.length);

// Array con las personas y el objeto de la persona tiene a mayores todos los datos de su mascota

// A partir de las personas sacar el animal que tienen más personas como mascota

// Número total de patas de las mascotas de las personas

// Array con las personas que tienen animales de 4 patas

// A partir del string 'España' obtener un array de personas no infectadas de ese país

// Array de paises que tienen personas con loros como mascota

// Numero de infectados totales (los del objeto del país) de los paises con mascotas de ocho patas

// A partir de las personas sacar el animal que tienen más personas como mascota

// const personsWithAnimal = persons.map((person) => {
//   const personCopy = { ...person };
//   const animal = pets.find((animal) => {
//     return personCopy.pet === animal.name;
//   });
//   console.log(animal);
//   personCopy.petData = animal;
//   return personCopy;
