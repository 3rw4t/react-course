const tecnologias  = ["HTML", "CSS", "Javascript", "React.js", "Node.js"]
tecnologias.push('Next.js')

console.log(tecnologias) //push muta al arreglo original

const nuevoArreglo = [...tecnologias, 'Nest.js']

console.log(nuevoArreglo)


tecnologias.shift()
console.log(tecnologias)


const tecnologias2 = tecnologias.filter(function(tech) {
    if(tech !== 'CSS'){
        return tech
    }
}) 

console.log(tecnologias2)

const tecnologias3 = tecnologias.map(function(tech) {
    if (tech === "Node.js"){
        return 'Nestt.js'
    }else{
        return tech
    }
})//para modificar un valor de un array sin mutar el array original

console.log ('tecnologías3 '+ tecnologias3)