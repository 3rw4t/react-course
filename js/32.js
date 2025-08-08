// Eventos de DOM - Submit

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', (e) => {

    e.preventDefault()
    const nombre = document.querySelector('#nombre').value
    const password = document.querySelector('#password').value
    
    //prevenir nuevas alertas
    const alertaPrevia = document.querySelector('.alerta')
    alertaPrevia?.remove() //si existe la remueve, sino, no hace nada :o


    const alerta = document.createElement('DIV')
    
    alerta.classList.add('alerta', 'text-white', 'uppercase', 'text-sm', 'text-center', 'p-2', 'font-black')   //alerta.classList = "clase-1 clase-2"


    if (nombre === '' || password === ''){ //validacion sencilla!

        alerta.textContent = 'todos los campos son obligatorios'
        alerta.classList.add('bg-red-500')

    } else {
        alerta.textContent = 'iniciando sesion'
        alerta.classList.add('bg-green-500')
    }
    formulario.appendChild(alerta) //le agregamos un hijo a formulario!

    setTimeout(() => alerta.remove(), 3000)
})