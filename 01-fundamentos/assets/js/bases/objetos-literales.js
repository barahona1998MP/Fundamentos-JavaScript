let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iroman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinty World'
};
console.log(personaje)
//Accediendo a las propiedades de los objetos
console.log('Nombre:', personaje.nombre)
console.log('Nombre:', personaje['nombre'])
console.log('edad:', personaje.edad)
console.log('Latitud:', personaje.coords.lat)

//Objetener la cantidad de trajes de Ironman
let cantidadTrajes = personaje.trajes.length
console.log('No. Trajes: '+cantidadTrajes)

//Obtener el ùltimo traje
console.log('ùltimo traje: ', personaje.trajes[personaje.trajes.length - 1])

//obtener informaciòn de un objeto
const x = 'vivo'
console.log('Vivo:', personaje[x])

//Otra forma de acceder a los objetos
console.log('Ùltima pelicula:', personaje['ultima-pelicula'])

/**
 * El operador delete de JavaScript remueve una propiedad de un objeto; si no se mantienen más referencias a la misma propiedad, eventualmente se libera automáticamente.
*/
delete personaje.edad
console.log(personaje)

//Como agregar un nuevo elemento al objeto
personaje.casado = true

/**
 * El método Object.entries() devuelve una matriz de pares propios de una propiedad enumerable [key, value] de un objeto dado, en el mismo orden que es proporcionado por for...in (La diferencia es que un bucle for-in enumera las propiedades en la cadena de prototipos).
*/
const entriesPares = Object.entries(personaje)
console.log(entriesPares)

/**
 * El método Object.freeze() congela un objeto, es decir: impide que se le agreguen nuevas propiedades; impide que se puedan eliminar las propiedades ya existentes; impide que dichas propiedades, o su capacidad de enumeración, configuración, o escritura, puedan ser modificadas; impide también que se pueda modificar su prototipo. El método devuelve el objeto recibido. 
*/

/**
 * El método Object.getOwnPropertyNames() devuelve un array con todas las propiedades (numerables o no) encontradas en un objeto dado. 
*/
let propiedades = Object.getOwnPropertyNames(personaje)
console.log(propiedades)
/**
 * El método Object.values() devuelve un array con los valores correspondientes a las propiedades enumerables de un objeto. Las propiedades son devueltas en el mismo orden a como lo haría un bucle for...in (la única diferencia es que un bucle for-in también enumera las propiedades en la cadena de prototipo de un objeto).
*/
let valores = Object.values(personaje)
console.log(valores)