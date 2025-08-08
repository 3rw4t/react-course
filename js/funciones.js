// Siempre hay que tener el type = "module" para poder importar las funciones de otro archivo!!

 function sumar(n1,n2) {
    return n1 + n2
}

function restar(n1,n2){
    return n1 - n2
}


export {
    sumar,
    restar
}



// Tambien podrían exportarse así

// export function sumar(n1,n2) {
//     return n1 + n2
// }

// export function restar(n1,n2){
//     return n1 - n2
// }

