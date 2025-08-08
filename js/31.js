// Eventos de DOM - inputs

const inputNombre = document.querySelector('#nombre')
inputNombre.addEventListener('input', (e) => {
    e.target.value
    console.log(e.target.value.length)
})
console.log(inputNombre)


const inputPassword = document.querySelector('#password')
inputPassword.addEventListener('input', functionPassword)// queremos mostrar la contraseña mientras escribimos para luego esconderla

function functionPassword (){
    inputPassword.type = 'text'
    setTimeout(() => {
        inputPassword.type= 'password'
    }, 700)
}