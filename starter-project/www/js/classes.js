'use strict';
/*
  Vamos a hacer dos classes una para representar zorros y otra para representar gallinas
  Vamos a tener una clase más que representa una granja

  Cuando construimos la granja le pasamos siempre un array de dos animales
  los animales pueden ser zorros o gallinas

  Cuando paso dos gallinas o dos zorros y cierro la puerta de la granja este metodo me devuelve
  tres gallinas o tres zorros respectivamente. Los animales originales siguen, pero el que han criado
  es una nueva referencia.

  Cuando paso un zorro y una gallina o una gallina y un zorro, al cerrar la puerta el metodo me 
  devuelve solo un zorro. Tiene que ser el mismo zorro que ha entrado.

  El metodo de cerrar la puerta siempre devuelve un array

  Metodos que van a tener las clases:
  -Constructor - Todas
  -Criar - zorros y gallinas
  -Comer - zorros y admite de parametro un array de animales
  -Cerrar puerta - Solo la granja
  */

class Zorro {
  criar() {
    return new Zorro();
  }
}

class Gallina {
  criar() {
    return new Gallina();
  }
}

class Granja {
  #animals;

  constructor(animals) {
    this.#animals = animals;
  }

  cerrarPuerta() {
    const todosZorros = this.#animals.every((animal) => {
      return animal instanceof Zorro;
    });
    const todosGallinas = this.#animals.every((animal) => {
      return animal instanceof Gallina;
    });
    if (todosZorros || todosGallinas) {
      const newAnimal = this.#animals[0].criar();
      this.#animals.push(newAnimal);
    }
    return this.#animals;
  }
}

const animals = [new Zorro(), new Zorro()];
const miGranja = new Granja(animals);

console.log(miGranja);
console.log(miGranja.cerrarPuerta());
