'use strict';

import CartItem from './cartItem.class.js';

export default class User {
  #cart = [];

  addToCart(item) {
    const foundItem = this.#cart.find((cartItem) => {
      return cartItem.name === item.name;
    });

    if (foundItem) {
      foundItem.increaseAmmount();
    } else {
      this.#cart.push(new CartItem(item));
    }
  }

  getCart() {
    return this.#cart;
  }
}
