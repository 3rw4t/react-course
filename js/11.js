const tecnologias  = ["HTML", "CSS", "Javascript", "React.js", "Node.js"]

const react = tecnologias[3]
const [html, css, nodejs] = tecnologias //destructuring de arreglos, a cada variable le asigna de acuerdo a la posicion del arreglo
console.log(nodejs)

//si quiero solamente reactjs por ej
const [, , , reactjs]= tecnologias
console.log(reactjs)