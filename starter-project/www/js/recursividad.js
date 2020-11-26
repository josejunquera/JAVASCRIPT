'use strict';

// FUNCIONES RECURSIVAS

//FUNCION PARA CALCULAR FACTORIAL
// ejemplo factorial de 4 => 4*3*2*1

function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(4));

// FUNCIÓN PARA CALCULAR FIBONACCI

// Serie fibonacci 0 1 1 2 3 5 8 13 21 34 55 89 144 => se suman siembre los dos números anteriores para calcular el siguiente

function fibonacci(x) {
  if (x <= 1) {
    return x;
  } else {
    return fibonacci(x - 1) + fibonacci(x - 2);
  }
}
console.log(fibonacci(40));

// FIBONACCI CON CACHE .

const cache = { 0: 0, 1: 1 };

function fibonacciMemo(x) {
  if (cache[x] || x === 0) {
    return cache[x];
  }
  const computedValue = fibonacciMemo(x - 1) + fibonacciMemo(x - 2);
  cache[x] = computedValue;
  return computedValue;
}

console.log(fibonacciMemo(40));
