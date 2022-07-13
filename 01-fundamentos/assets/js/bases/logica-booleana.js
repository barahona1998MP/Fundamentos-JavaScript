const regresaTrue = () => {
    console.log('Regresa true')
    return true
}

const regresaFalse = () => {
    console.log('Regresa false')
    return false
}

console.warn('not o negacion');
console.log(true); // true
console.log(!true); // false
console.log(!false); //true

console.warn('And'); // true si todos son verdaderos
console.log(true && true) // true
console.log(true && false) // false

console.log(regresaFalse() && regresaTrue()); //False
console.log(regresaTrue() && regresaFalse()); //False

console.log('==== && ===');
regresaFalse() && regresaTrue();

console.warn('OR'); //true
console.log(true || false); 
console.log(false || false);

console.log('==== && ===');
console.log(regresaTrue() && regresaFalse());

console.warn('Asignaciones')