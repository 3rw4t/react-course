// Funciones - Arrow Functions
//
const sumar = (numero1 = 0, numero2= 0) => {
    console.log(numero1 +  numero2)
}

//se pueden eliminar las llaves si la funcion tiene una sola línea:

const sumar2 = (numero1 = 0, numero2= 0) => console.log(numero1 +  numero2)

sumar(0,1)
sumar2(2,0)

