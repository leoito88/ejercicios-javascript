/* Uso de for...of con Objetos: 
Escribe una función que reciba un objeto con propiedades de alumnos y sus notas (por ejemplo, {Juan: 8, Maria: 9, Pedro: 7}) y devuelva el promedio de las notas. Utiliza un bucle for...of para iterar sobre los valores del objeto. */

function calcularPromedio(notasAlumnos) {
    let sumaNotas = 0; // Inicializamos en 0 la suma
    let valoresNotas = Object.values(notasAlumnos);
    for (let nota of valoresNotas) {
        sumaNotas += nota;
    }
    return sumaNotas / valoresNotas.length; // Dividimos la suma de todas las notas entre la cantidad de notas
}

// Ejemplo de uso de la función
let notas = { Juan: 8, Maria: 9, Pedro: 7, Pablo: 3, Leandro: 9, Maximiliano: 4, Romina: 7 };
let promedio = calcularPromedio(notas);

console.log("5- Proponemos como ejemplo Juan: 8, Maria: 9, Pedro: 7, Pablo: 3, Leandro: 9, Maximiliano: 4, Romina: 7")
console.log(`El promedio es: ${promedio}`); // Salida: El promedio es: 6.714285714285714