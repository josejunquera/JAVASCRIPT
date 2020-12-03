'use strict';

/*
  Vamos a crear un ecommerce

  Por un lado tenemos los usuarios, que van a estar representados por una clase
  Solo voy a necesitar una instancia de un usuario.
  El usuario tiene un carrito que es privado, el carrito es un array.
  En el array el usuario va metiendo items
  El usuario va a tener un metodo de añadir al carrito, porque no puedo modificarlo desde fuera,
  añadir al carrito recibe un item como parametro.
  Tambien tiene un metodo pagar que devuelve el carrito para poder pasarlo a la tienda y que emita la
  factura

  Voy a tener una clase Item. Los items los voy a generar a partir de los datos de abajo.

  Voy a tener una tienda representada con su clase.
  Va a tener un metodo comprar, que recibe el carrito de usuario
  El metodo de comprar saca por la consola la factura
  cada linea de la factura tiene el nombre del articulo, las unidades, el precio por unidad y el 
  precio de las unidades de esa linea.
  La ultima linea saca el total de todo el carrito
*/

//nueva clase al añadir para que me añada la cantidad de objetos añadidos "acumulador..."

const itemNames = ['Camisa', 'Pantalon', 'Calcetines'];
const itemPrices = [13, 27, 100];

class User {
  name;
  cart;
  constructor(name, cart) {
    this.name = name;
    this.cart = cart;
  }
  addToCart(item) {
    this.cart.push(item);
    return this.cart;
  }
}

class Items {
  static createItems() {
    const items = itemNames.map((value, index) => {
      const tempItem = { name: itemNames[index], price: itemPrices[index], ammount: 1 };
      return tempItem;
    });
    console.log('ITEMS', items);
  }
}
console.log(Items.createItems());

// class Shop {
//   static checkout() {
//     let totalTicket = myUser.cart.reduce((accumulator, currentValue) => {
//       return accumulator + currentValue.price;
//     }, 0);

//     console.log('Total importe ticket ' + totalTicket);
//   }
// }

const myUser = new User('Paco', []);

console.log(myUser);

// myUser.addToCart(Item.createItem(1));
// myUser.addToCart(Item.createItem(0));
// myUser.addToCart(Item.createItem(2));
// myUser.addToCart(Item.createItem(2));

// console.log(myUser.cart);
// Shop.checkout();
