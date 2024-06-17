/* - Uso de Math para Cálculos: 
Escribe una función que reciba un número y devuelva un objeto con sus propiedades matemáticas: el cuadrado, la raíz cuadrada y el valor absoluto. Utiliza métodos de Math. */

function propiedadesMatematicas(numero) {
    return {
        cuadrado: Math.pow(numero, 2),
        raizCuadrada: Math.sqrt(numero), // Nota: En el conjunto de los números reales no existe una raíz cuadrada real para los números negativos.
        valorAbsoluto: Math.abs(numero)
    };
}

// Ejemplo de uso de la función
let numero = -4;
let resultado = propiedadesMatematicas(numero);

console.log("3- Proponemos como ejemplo el número -4")
console.log(resultado); // Salida: { cuadrado: 16, raizCuadrada: NaN (Not A Number), valorAbsoluto: 4 }