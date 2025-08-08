// Objetos

const producto = {
    nombre : "Cubo",
    precio : 200000,
    disponible : false

}

// console.log(producto)
// console.table(producto)
/* 
console.log(producto.precio)
console.log(producto.nombre)
console.log(producto.tipo)
 */


// Destructuring
/* 
const { nombre, disponible, precio } = producto
console.log(nombre)
console.log(disponible)
console.log(precio)
*/
// es la forma moderna de
/* 
const nombre1 = producto.nombre
console.log(nombre1)
*/

// Object Literal Enhacement

const autenticado = true
const usuario = "Juan"

const nuevoObjeto = {
    autenticado,
    usuario
}

console.log(nuevoObjeto)