// Desventajas de un archivo muy grande, ralentiza la navegacion, 
//por lo tanto podríamos importar funciones de otros archivos, logrando tambien que el codigo sea mas facil de mantener

import {sumar as funcionSumar, restar} from './funciones.js'//importando funcion con alias
const resultado = funcionSumar(20,30)

console.log(resultado)

