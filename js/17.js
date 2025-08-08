// Array methods

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']
const numeros = [10,20,30]

// Filter

const nuevoArray = tecnologias.filter((tech) => console.log(tech))

const resultado = numeros.filter(numero => numero !== 10)
console.log(resultado)

// Includes
const resultado2 = tecnologias.includes('CSS')
console.log(resultado2)

// Some - Devuelve si al menos uno cumple la condicion
const resultado3 = numeros.some(numero => numero === 5)
console.log(resultado3)

// Find - devuelve el primer elemento que cumple una condicion
const resultado4 = numeros.find(numero => numero > 15)
console.log(resultado4)

// Every - retorna true o false si todos cumplen la condicion
const resultado5 = numeros.every(numero=> numero > 5)
console.log(resultado5)

// Reduce - retorna un acumulado del total
const resultado6 = numeros.reduce((total, numero) => total + numero, 0)

console.log(resultado6)