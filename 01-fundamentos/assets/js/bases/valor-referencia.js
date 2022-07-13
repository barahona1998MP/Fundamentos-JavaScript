let a = 10
let b = a;
console.log(a, b)

/**
 * Operador spread para romper referencias 
 */

//Este ejemplo no rompe la relacion 
let marcos2 = {nombre: 'Marcos'};
let ana2 = marcos2; 
ana2.nombre = 'Ana';
console.log({marcos2, ana2});

//Primer ejemplo aqui si rompe la relacion por el operador spread {...marcos}
let marcos = {nombre: 'Marcos'};
let ana = {...marcos}; 
ana.nombre = 'Ana';
console.log({marcos, ana});


const cambiaNombre = ({...persona}) => {
    persona.nombre = 'Tony'
    return persona
}

let peter = {nombre: 'Peter'}
let tony = cambiaNombre(peter)
console.log({peter, tony})

//Ejemplo con arreglos
const frutas = ['Manzana', 'Pera', 'Piña']
const otrasFrutas = [...frutas]
otrasFrutas.push('Mango')
console.table({frutas, otrasFrutas})

//Otra forma de romper la relacion con arrelgos o objetos
const frutas2 = ['Manzana', 'Pera', 'Piña']
const otrasFrutas2 = frutas2.slice()
otrasFrutas2.push('Mango')
console.table({frutas2, otrasFrutas2})