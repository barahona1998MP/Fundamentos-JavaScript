const heroes = [ 'Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

/**
 * Ciclo for tradicional
 */

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i])
}

/**
 * Ciclo for in
*/

for (let i in heroes) {
    console.log(heroes[i])
}

/**
 * Ciclo for of
 * Para obtener referencia a valores de objetos o array
*/

for (const heroe of heroes) {
    console.log(heroe)
}