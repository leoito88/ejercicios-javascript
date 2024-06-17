/* Manipulación de Strings: 
Crea una función que reciba una cadena y devuelva la misma cadena con las palabras en orden inverso. Utiliza métodos de manipulación de cadenas y arrays.*/

function invertirOrdenPalabras(cadena) {
    return cadena.split(" ").reverse().join(" ");
}

// Ejemplo de uso de la función
let frase = "Hola cómo les va? me llamo Leandro y estoy codeando";
let fraseInvertida = invertirOrdenPalabras(frase);

console.log("6- Proponemos como ejemplo ´Hola cómo les va? me llamo Leandro y estoy codeando´")
console.log(fraseInvertida); // Salida: "codeando estoy y Leandro llamo me va? les cómo Hola"