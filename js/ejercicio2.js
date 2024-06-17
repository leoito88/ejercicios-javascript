/* Uso de for y Cadenas: 
Crea una función que reciba una cadena y devuelva una nueva cadena con las vocales en mayúsculas. Utiliza un bucle for para iterar sobre los caracteres de la cadena.*/

function vocalesEnMayusculas(cadena) {
    let nuevaCadena = ""; // Declaramos la cadena vacía.

    const vocales = "aeiou"; // Declaramos las vocales.
    let longitudFrase = cadena.length; // Revisamos una sola vez la longitud de la frase

    for (let i = 0; i < longitudFrase; i++) {
        let caracter = cadena[i];
        if (vocales.includes(caracter.toLowerCase())) { // Si detecta una vocal en minúsculas, ésta es agregada a la nueva cadena en mayúsculas
            nuevaCadena += caracter.toUpperCase();
        } else {
            nuevaCadena += caracter; // Si no es una vocal, se agrega como está, ya sea mayusculas o minusculas
        }
    }
    return nuevaCadena;
}

// Ejemplo de uso de la función
let texto = "Hola Mundo, me llamo Leandro y esta es una prueba";
let textoConVocalesMayusculas = vocalesEnMayusculas(texto);

console.log("2- Proponemos como ejemplo ´Hola Mundo, me llamo Leandro y esta es una prueba´")
console.log(textoConVocalesMayusculas); // Salida: "HOlA MUndO, mE llAmO LEAndrO y EstA Es UnA prUEbA"