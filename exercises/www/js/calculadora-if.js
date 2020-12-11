/* ######################################
 * ## Calculadora "if" con una función ##
 * ######################################
 *
 * Crea una calculadora con "if" que opere con dos números. La calculadora
 * utilizará la variable "option" para decidir el tipo de operación a realizar.
 * Debe poder sumar, restar, multiplicar y dividir. A mayores debe permitir
 * elevar el nº A a la potencia de B.
 *
 * Bonus point: no se puede dividir entre 0.
 */

function calculadora(option, a, b) {
  if (option === "suma") {
    return a + b;
  } else if (option === "resta") {
    return a - b;
  } else if (option === "multiplica") {
    return a * b;
  } else if (option === "divide") {
    return a / b;
  } else if (option === "elevar") {
    return Math.pow(a, b);
  }
}

console.log(calculadora("elevar", 4, 2));
