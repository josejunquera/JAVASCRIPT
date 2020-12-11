/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Dada una variable que almacene la edad de una persona:
 *
 *  - Si edad es "menor" que 18 muestra por consola un mensaje indicando que la
 *    la persona tiene menos de 18 años.
 *
 *  - Si la edad es "igual o mayor" que 18 y "menor" que 45 muestra por consola un
 *    mensaje indicando que la persona tiene entre 18 y 44 años.
 *
 *  - Si edad es "igual o mayor" que 45 muestra por consola un mensaje indicando
 *    que la persona tiene 45 años o más.
 */
let edad = 55;

if (edad < 18) {
  console.log("Es menor de edad");
} else if (edad > 18 && edad < 45) {
  console.log("Edad entre 18 y 44");
} else {
  console.log("Es mayor de 45");
}
