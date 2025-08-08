// Optional chaining (?)
const alumno = {
    nombre: 'Juan',
    clase: 'Programacion 1',
    aprobado : true,
    examenes: {
        examen1: 90
    }
}

//revisa si una propiedad existe, y si está, la muestra (nos ahorra un if) es bueno para respuestas de una API por ej
console.log(alumno.examenes?.examen1)

console.log('Despues de alumno');

// Nullish coalescing operator (??)
//retorna el operando del lado derecho si el operando del lado izquiero es null o undefined, en caso contrario retorna el operador de la izquierda
const pagina = null ?? 1
console.log(pagina)

