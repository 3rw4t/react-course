const saldo = 1000
const pagar = 500
const tarjeta = true
if (saldo > pagar){
    console.log('puede pagar')
} else if (tarjeta){
    console.log('puede pagar')

} else {

    console.log('NO puede pagar');
    
}

// hel naw, mejor así:
// Logical Or ||
// Logical And &&

if (saldo > pagar || tarjeta){

    console.log('puede pagar')
} else {

    console.log('NO puede pagar');
}

