//Metodos y propiedades de los Array
let juegos = ["Zelda", "Mario", "Metroid", "Chrono"];
/**
 * La propiedad length de un objeto que es una instancia de tipo Array establece o devuelve la cantidad de elementos en esa matriz.
*/
console.log("Longitud:", juegos.length);
//Obtener primer elemento de un array
console.log(juegos[0]);

//Obtener ultimo elemento de un array
let ultimoElemento = juegos[juegos.length - 1];
console.log(ultimoElemento);

/**
 * El método forEach() ejecuta la función indicada una vez por cada elemento del array.
*/
juegos.forEach((elemento, indice, arr) => {
  console.log({ elemento, indice, arr });
});

/**
 * El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
*/
let newLongitud = juegos.push("F-Zero");
// console.log(newLongitud)
console.log({newLongitud, juegos});

/**
 * El método unshift() agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.
*/
newLongitud = juegos.unshift("Fire Embles");
console.log({newLongitud, juegos});

/**
 * El método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.
*/
let juegoBorrado = juegos.pop()
console.log({juegoBorrado, juegos})

/**
 * El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
*/
let puntoInicio = 1;
console.log(juegos)
let juegosBorrados = juegos.splice(puntoInicio, 2)
console.log({juegosBorrados, juegos})

/**
 * El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.
*/

let metroidIndex = juegos.indexOf('Metroid')
console.log({metroidIndex, juegos})