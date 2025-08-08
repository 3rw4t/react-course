// Siempre hay que tener el type = "module" para poder importar las funciones de otro archivo!!


 export const sumar = (n1,n2) => n1 + n2 //también se pueden exportar arrow functions!

function restar(n1,n2){
    return n1 - n2
}

const dividir = (n1 , n2) => n1 / n2

export { // para exportar multiples funciones y no tener que usar la instruccion export en cada una
    restar,
    dividir
}



// Tambien podrían exportarse así

// export function sumar(n1,n2) {
//     return n1 + n2
// }

// export function restar(n1,n2){
//     return n1 - n2
// }


//con esto denotamos la funcion default a exportar ie import multiplicar, { ...} ...
// export default function multiplicar(n1,n2){
//     return n1*n2
// }

//para exportar de forma default una arrow function se haría algo así

const multiplicar = (n1, n2) => n1 * n2
export default multiplicar

