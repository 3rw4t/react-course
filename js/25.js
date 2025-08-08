// Fetch API con Promises
// testeando json de pruebas de la pagina https://jsonplaceholder.typicode.com/comments
const url = 'https://jsonplaceholder.typicode.com/123'

fetch(url)
    .then((response) =>{
        if(response.ok){ //Hacemos esto para que pueda llegar al catch en caso de que esté mal la url, sino se devolvería la respuesta igual
            return response.json()
        }
        throw new Error('Hubo un error...')
        
    })
    .then( data => console.log(data)) //vamos anidando 'then's para esperar la respuesta de la API
    .catch(error =>  console.log(error.message))

