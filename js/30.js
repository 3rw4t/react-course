// Eventos del DOM - Clicks
const heading = document.querySelector('.heading')
const enlaces = document.querySelectorAll('.navegacion a')
heading.textContent='nuevo titulo'

// heading.addEventListener('mouseenter', () => {
//     heading.textContent= 'entrando'
// })
// heading.addEventListener('mouseleave', () => {
//     heading.textContent= 'saliendo'
// })

enlaces.forEach(enlace => {
    enlace.addEventListener('click', (e) => {
        e.preventDefault() //hacemos esto para que no intente cambiar de pagina
        console.log(e.target) // target nos devuelve que elemento triggerea el elemento, asi podemos trabajarlo individualmente
        console.log('Diste click en un enlace')
        e.target.textContent= 'Diste click'
    })
})