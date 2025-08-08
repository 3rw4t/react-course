// Condicionales 

const disponible = 200
const retirar = 200

const auth = true
if(auth){
    // Se cumple la condicion
    console.log ('acceso al sistema')
} else {
    // No se cumple la condicion
    console.log ('denegado')
}


if(disponible >= retirar){
    console.log('Si puede retirar')
} else {

    console.log('Saldo insuficiente')
}

