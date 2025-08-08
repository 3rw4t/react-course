// Objetos

const producto = {
    nombre : "Cubo",
    precio : 200000,
    disponible : false

}

//para no permitir añadir ni modificar propiedades
//Object.freeze (producto)

//para no permitir añadir propiedades pero si modificar
Object.seal (producto)



console.log(producto)

//reescribir valor
producto.disponible = true

// si no existe, lo añade
producto.imagen = 'imagen.jpg'

// Eliminar propiedad
delete producto.precio


console.log(producto)