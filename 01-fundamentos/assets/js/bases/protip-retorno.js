// function crearPersona( nombre, apellido ) {
//     return {nombre, apellido}
// }

const crearPersona = (nombre , apellido) => ({nombre, apellido});
console.log(crearPersona('Marcos', 'Plata'))

//argumentos
function imprimeArgumentos() {
    console.log(arguments);
}

/**
 * argumentos con funcion flecha ... Esto hace referencia a un parametro rest despues de ese parametro no puede venir otro argumento

 * La sintaxis de los parámetros rest nos permiten representar un número indefinido de argumentos como un array.
*/
const imprimeArgumentos2 = (edad, ...args) => {
    // console.log(args)
    return args
}
//Darle nombre a los argumentos
const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Marcos', 'Hola')
console.log({casado, vivo, nombre, saludo})


const {apellido: nuevoApellido}  = crearPersona('Marcos', 'Plata')
console.log(nuevoApellido)



/**
 * Destructuraciòn de argumentos
*/
const imprimirPropiedades = ({nombre, codeName, vivo, edad, trajes}) => {
    console.log({nombre})
    console.log({codeName})
    console.log({vivo})
    console.log({edad})
    console.log({trajes})
}

let tony = {
    nombre: 'Tony Stark',
    codeName: 'Iroman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

imprimirPropiedades(tony)
