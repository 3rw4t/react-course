// Evaluacion de cortocircuito

let auth
if (null) {
    console.log('Truthy')
} else {
    console.log('Falsy')
}

// los valores que son falsy son 0, null, undefined

const user = {}

user && console.log('Usuario autenticado') //sirve para ejecutar una accion en caso de que el usuario esté autenticado

//se podría usar un ternario en caso de querer ejecutar una linea si se cumple la condicion y otra en caso de que no se cumpla