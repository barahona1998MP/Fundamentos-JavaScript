/**
 * Dìas de semana abrimos a las 11 
 * pero los fines de semana abrimos a las 9
 */

// Entra a un sitio web, para consultar si esta abierto
const hoy = new Date()
let dia = hoy.getDay()
let horaActual = hoy.getHours()
let horaApertura;
let mensaje;

/**
 * El método includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.
*/
// if ( dia === 0 || dia === 6) {
// if ( [0, 6].includes(dia) ) {
//     console.log('Fin de semana') 
//     horaApertura = 9;

// } else {
//     console.log('Dia de semana')
//     horaApertura = 11;
// }

horaApertura = ( [0, 6].includes( dia ) ) ? 9 : 11


// if ( horaActual >= horaApertura) {
//     mensaje = 'Esta abierto'
// } else {
//     mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`
// }

mensaje = ( horaActual >= horaApertura ) ? 'Esta abierto' : `Esta cerrado, hoy abrimos a las ${horaApertura}`
console.log({horaApertura, mensaje})