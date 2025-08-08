// Operador ternario
const auth = true

const saldo = 1000
const pagar = 5000
const tarjeta = true

if (auth){
    console.log('Usuario autenticado');
} else {
    console.log('No autenticado');
}

// hell naw

auth ? 
    console.log('Usuario autenticado') :
    console.log('No autenticado')

//se pueden anidar
saldo > pagar ?
    console.log('si puede pagar'):
    tarjeta ?
        console.log('Puedes pagar con tarjeta'):
        console.log('no puede pagar')

//es dificil de mantener usandolos así, así que es mejor:

saldo > pagar || tarjeta ?
    console.log('si puede pagar'):
    console.log('no puede pagar')



    