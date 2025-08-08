// Fetch API con Async / Await y Try catch
// testeando json de pruebas de la pagina https://jsonplaceholder.typicode.com/comments

// con async / await, los then se ven reemplazados por instrucciones await
const url = 'https://jsonplaceholder.typicode.com/comments'

    // fetch(url)
    //     .then((response) =>{
    //         if(response.ok){
    //             return response.json()
    //         }
    //         throw new Error('Hubo un error...')
            
    //     })
    //     .then( data => console.log(data)) //vamos anidando 'then's para esperar la respuesta de la API
    //     .catch(error =>  console.log(error.message))

const consultarAPI = async () => {
    try { //intentamos llamar a la api
        const response = await fetch(url) //intenta hacer el llamado, y una vez que lo finaliza lo asigna a repsonse
        if(!response.ok){//chequeamos que hayamos hecho satisfactoriamente la llamada, sino se guardaria un objeto vacio y no saltaría un error, entonces lo forzamos
            throw new Error('Hubo un error...')
        }
        const data = await response.json()
        console.log(data)
    } catch (error){
        console.log(error.message)
    }
}


consultarAPI()