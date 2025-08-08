// Manipular elemtnos html con js

const heading = document.querySelector('.heading') 
const enlaces = document.querySelectorAll('.navegacion a') 


console.log(heading.textContent)
heading.textContent = 'Baneen Trundle' //modificamos el valor como si fuese un objeto
// heading.id= 'nuevo ID' //podemos asignar un nuevo ID

// delete heading.textContent // no funciona xd

// heading.removeAttribute('class') 

const inputNombre = document.querySelector('#nombre')
inputNombre.value = 'Un nuevo valor...'
inputNombre.dataset.value = "input"


console.log(inputNombre.classList)

//ahora vemos como manipular una coleccion


enlaces[0].textContent = 'test' //se manejan como un aray

enlaces.forEach (enlace => enlace.textContent = 'Test') //usamos forEach para modificar a todos



