// Objetos - Unir 2 o mas objetos

const producto = {
    nombre : "Cubo",
    precio : 200000,
    disponible : false

}

const cliente = {
    nombre : "Angel",
    premium : true,

}


// const carrito = {
//     cantidad: 1,
//     ...producto // spread operator
// }

// console.log(carrito)

const nuevoObjeto = {
    ...producto,
    ...cliente

}


console.log(nuevoObjeto)

const nuevoObjeto2 = Object.assign(producto, cliente)

console.log(nuevoObjeto2)

