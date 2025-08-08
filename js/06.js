// Objetos - Destructuring de dos objetos

const producto = {
    nombre : "Cubo",
    precio : 200000,
    disponible : false

}

const cliente = {
    nombre : "Angel",
    premium : true,
    direccion: {
        calle: "Chacabuco"
    }
}

const { nombre } = producto
const { nombre: nombreCliente, direccion: {calle}} = cliente

console.log(nombre)
console.log(nombreCliente)
 
console.log(calle)


