/* Uso de for y Arrays: 
Escribe una función que reciba dos arrays de la misma longitud y devuelva un nuevo array con la suma de los elementos correspondientes. Utiliza un bucle for para iterar sobre los índices de los arrays. */

function sumarElementosCorrespondientes(array1, array2) {
    let sumaArray = []; // Declaramos un array vacío que será el que contenga la suma de cada elemento correspondiente de los arrays.

    let longitudLista = array1.length; // Verificamos una sola vez la longitud de uno de los arrays (tienen la misma longitud). 

    for (let i = 0; i < longitudLista; i++) {
        sumaArray.push(array1[i] + array2[i]);
    }
    return sumaArray;
}

// Ejemplo de uso de la función
let arrayA = [8, 4, 6];
let arrayB = [2, 3, 5];
let resultadoSuma = sumarElementosCorrespondientes(arrayA, arrayB);

console.log("7- Proponemos como ejemplo los arrays [8, 4, 6] y [2, 3, 5]")
console.log(resultadoSuma); // Salida: [10, 7, 11]