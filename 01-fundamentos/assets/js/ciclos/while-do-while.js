const carro = ['Ford', 'Hyundai', 'Honda', 'Toyota']

let i = 0
// while (i < carro.length) {
//     console.log(carro[i])
//     i++
// }

/*  Condiciones considerados falsos
 * Undifined, null, false
*/
while ( carro[i] ) {
    console.log(carro[i])
    i++
}


/**
 * Do While
 */ 

let j = 0
do {
    console.log(carro[j])
    j++
} while (carro[j]);