// Performance y Multiple Asyc Await

// Puede ser que tengamos dos codigos que hagan lo mismo, entonces lo que podemos hacer es testear a ver cual es mas eficiente para la misma tarea
const url = 'https://jsonplaceholder.typicode.com/comments'
const url2 = 'https://jsonplaceholder.typicode.com/todos'
const url3 = 'https://jsonplaceholder.typicode.com/photos'

const consultarAPI = async () => {
    try { //intentamos llamar a la api

        const inicio = performance.now() // comenzamos a medir la performance

        const response = await fetch(url) 
        const data = await response.json()
        console.log(data)
        
        const response2 = await fetch(url2) 
        const data2 = await response2.json()
        console.log(data2)

        const response3 = await fetch(url3)
        const data3 = await response3.json()
        console.log(data3)

        const fin = performance.now() // con esto damos marcamos el final de la ejecucion del codigo a probar

        console.log(` primer funcion:El tiempo es: ${fin - inicio} ms `)
    } catch (error){
        console.log(error.message)
    }
}

consultarAPI()

const consultarAPI2 = async () => {
    try { //intentamos llamar a la api
        
        const inicio = performance.now() // comenzamos a medir la performance
        
        //utilizamos promesas para hacer las 3 llamadas simultaneamente y almacenamos los resultados en un array
        const [response, response2, response3] = await Promise.all([fetch(url), fetch(url2), fetch(url3)]) //fetcheamos las 3 apis a la vez

        //Nuevamente utilizamos promesas para convertir los resultados en json
        const [data, data2,data3] = await Promise.all([response.json(), response2.json(), response3.json()])

        console.log(data)
        

        console.log(data2)


        console.log(data3)

        const fin = performance.now() // con esto damos marcamos el final de la ejecucion del codigo a probar

        console.log(`segunda funcion El tiempo es: ${fin - inicio} ms `)
    } catch (error){
        console.log(error.message)
    }
}

consultarAPI2()