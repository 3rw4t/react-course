const tecnologias  = ["HTML", "CSS", "Javascript", "React.js", "Node.js", "nsetjs"]

// console.log(tecnologias[0])
// console.log(tecnologias[1])
// console.log(tecnologias[2])
// console.log(tecnologias[3])
//hell naw

// for(let i = 0; i < tecnologias.length; i++){
//     console.log(tecnologias[i])
// }

// forEach, ejecuta una funcion por cada elemento

// tecnologias.forEach(function(tech){
//     console.log(tech)
// })

// map
//map genera un nuevo arreglo
const arraymap = tecnologias.map(function(tech){
    return tech
})

console.log(arraymap)

// for ... of
//casi nadie utiliza este
for (let tech of tecnologias){
    console.log(tech)
}