// Desventajas de un archivo muy grande, ralentiza la navegacion, 
//por lo tanto podríamos importar funciones de otros archivos, logrando tambien que el codigo sea mas facil de mantener

import hola, {sumar as funcionSumar, restar, dividir} from './funciones.js'//importando funcion con alias

const resultado1 = hola(20,30)
const resultado2 = funcionSumar(20,30)
const resultado3 = restar(20,30)
const resultado4 = dividir(20,30)

console.log(resultado1)
console.log(resultado2)
console.log(resultado3)
console.log(resultado4)

