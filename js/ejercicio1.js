/* Uso de for...of y Arrays: 
-Escribe una función que reciba un array de números y retorne un nuevo array con cada número elevado al cuadrado. Utiliza un bucle for...of para iterar sobre los elementos del array.*/


// Función que recibe un array de números y retorne un nuevo array con cada número elevado al cuadrado

function elevarAlCuadrado(numeros) {
    let resultado = [];
    for (let numero of numeros) {
        resultado.push(Math.pow(numero, 2));
    }
    return resultado;
}

// Ejemplo de uso de la función
let numerosOriginales = [1, 2, 3, 4, 5, 6];
let numerosAlCuadrado = elevarAlCuadrado(numerosOriginales);

console.log("Proponemos como ejemplo el array [1, 2, 3, 4, 5, 6]")
console.log(numerosAlCuadrado); // Salida: [1, 4, 9, 16, 25, 36]