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
console.log(fibonacci(8));
