'use strict';

export default function getRandomItem(items) {
  const randomIndex = Math.floor(Math.random() * items.lenght);
  return items[randomIndex];
}
