'use strict';

// for in para navergar entre keys de un objeto, sino object keys.
// mucho map...

/*
  Vamos a tener una clase que describe a los sospechosos.
  Cada instancia almacena los datos fisicos de un sospechoso.
  Cada sospechoso tiene un dato de la persona culpable
  Nadie miente
  El tip es privado, para que confiese necesitaremos un método

  Vamos a tener una clase detective
  El detective va a tener un método para investigar
  El metodo de investigar recibe un array de sospechosos
  Y devuelve al único culpable que hay
  OPCIONAL: Podeis ponerle datos personales si quereis pero no es obligatorio. Podeis implementar
  una clase persona de la que heredan el detective y los sospechosos.
*/

// Con estos datos vais a tener que montar las instancias
const names = ['Willy', 'Ivan', 'Ramiro'];
const eyeColor = ['azul', 'marron', 'azul'];
const height = ['bajo', 'alto', 'alto'];
const tattooed = [true, false, false];
const tip = [
  {
    height: 'alto',
  },
  {
    eyeColor: 'marron',
  },
  {
    tattooed: false,
  },
];

// Aqui están los objetos ya montados
const suspects = [
  {
    name: 'Willy',
    eyeColor: 'azul',
    height: 'bajo',
    tattooed: true,
    tip: {
      height: 'alto',
    },
  },
  {
    name: 'Ivan',
    eyeColor: 'marron',
    height: 'alto',
    tattooed: false,
    tip: {
      eyeColor: 'marron',
    },
  },
  {
    name: 'Ramiro',
    eyeColor: 'azul',
    height: 'alto',
    tattooed: false,
    tip: {
      tattooed: false,
    },
  },
];

// const sospechosos = names.map((name, index) => {
//   const tempSospechoso = {
//     name: names[index],
//     eyeColor: eyeColor[index],
//     height: height[index],
//     tattooed: tattooed[index],
//     tip: tip[index],
//   };
//   return tempSospechoso;
// });

// console.log(sospechosos);

class Sospechoso {
  // Atributos de la clase
  name;
  eyeColor;
  height;
  tattooed;
  #tip;

  // Constructor para inicializar los atributos de la clase
  constructor(name, eyeColor, height, tattooed, tip) {
    this.name = name;
    this.eyeColor = eyeColor;
    this.height = height;
    this.tattooed = tattooed;
    this.#tip = tip;
  }

  static crearSospechoso() {
    const sospechosos = names.map((name, index) => {
      return new Sospechoso(names[index], eyeColor[index], height[index], tattooed[index], tip[index]);
    });
    return sospechosos;
  }

  // Generamos un metodo para acceder al atributo "tip" porque es privado
  getTip() {
    return this.#tip;
  }
}

// Sospechoso.crearSospechoso();

// // Ejemplo de instancia de un objeto de una clase
// let newSospechoso = new Sospechoso('Junke', 'black', '180', true, 'feo');
// console.log(newSospechoso);
// console.log(newSospechoso.getTip());

class Detective {
  // Definimos los atributos de la clase
  tips;
  culpable;

  constructor() {
    this.tips = {};
  }

  // Definimos el metodo para detectar al culpable
  insvestigar(array) {
    // Obtenemos cada tip por sospechoso
    array.forEach((sospechoso) => {
      let tip = sospechoso.getTip();
      this.tips[Object.keys(tip)[0]] = tip[Object.keys(tip)[0]];
    });

    // Obtenemos al culplabe
    array.forEach((sospechoso) => {
      if (
        this.tips.eyeColor === sospechoso.eyeColor &&
        this.tips.height === sospechoso.height &&
        this.tips.tattooed === sospechoso.tattooed
      ) {
        this.culpable = sospechoso.name;
      }
    });
  }
}

// Instanciamos objeto de la clase detective
let d1 = new Detective();

// Investigamos a los sospechosos para obtener el culpable
d1.insvestigar(Sospechoso.crearSospechoso());

// Mostramos por consola el culpable
console.log(d1.culpable);
