function saludar(){
    return 'Hello World'
}
console.log(saludar())

//Funcion con argumentos
function saludo(nombre) {
    console.log('Hola ' +nombre)
}
saludo('Marcos Andres')

//Funcion anonima
const saludar2 = function(){
    console.log('Hello Marcos')
}
saludar2()


//Funcion flecha
const saludarFlecha = () => {
    return 'Hola flecha'
}
console.log(saludarFlecha())

//Funcion flecha con argumento
const saludarFlecha2 = (nombre) => {
    return ('Hola flecha ' +nombre)
}
console.log(saludarFlecha2('Marcos Plata'))

//Ejercicios
const sumar = (a, b) => a + b; //Esto solo si no tiene mas instrucciones
console.log(sumar(2, 1))

function getAleatorio() {
    return Math.random();
}
console.log(getAleatorio())

//Convertir la funcion anterio en funciòn flecha que no tenga llaves
const getAleatorio2 = () => Math.random();
console.log(getAleatorio2())
