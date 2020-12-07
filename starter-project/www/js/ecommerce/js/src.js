'use strict';

import User from './user.class.js';
import Item from '/js/item.class.js';

const itemNames = ['Camisa', 'Pantalón', 'Calcetines'];
const itemPrices = [13, 27, 100];

const catalog = Item.buildItems(itemNames, itemPrices);

const user = new User();

user.addToCart(catalog[1]);
user.addToCart(catalog[0]);
user.addToCart(catalog[1]);
user.addToCart(catalog[2]);
user.addToCart(catalog[2]);
user.addToCart(catalog[2]);
user.addToCart(catalog[1]);

console.log(catalog, user);
