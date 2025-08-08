// Eventos de DOM - Submit

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    const nombre = document.querySelector('#nombre').value
    
    const password = document.querySelector('#password').value
    console.log(nombre);
    console.log(password);
    
    if (nombre === '' || password === ''){ //validacion sencilla!
        console.log('todos los campos son obligatorios')
    } else {
        console.log('iniciando sesion')
    }
    console.log('enviando formulario')
})