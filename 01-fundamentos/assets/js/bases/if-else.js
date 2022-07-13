let a = 5;
if ( a > 10 ) { //Ecepciones como null, una asignacion
    console.log('A es mayor a 10')
} else {
    console.log('A es menor a 10')   
}

//New sirve para crear instancia o nuevos objectos

const hoy = new Date();
let dia = hoy.getDay();
console.log({dia})

if (dia === 0) {
    console.log('Domingo')
} else if (dia === 1){
    console.log('Lunes')
} else if (dia == 2){
    console.log('Martes')
} else { 
    console.log('No existe ese dìa')
}

const diaLetra = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado'
}
console.log(diaLetra[dia] || 'Dia no definido')


const diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
console.log(diaSemana[dia] || 'Dia no definido')