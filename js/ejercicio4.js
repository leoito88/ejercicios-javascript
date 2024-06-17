/* Clases y Métodos: 
Define una clase Rectangle que tenga dos propiedades width y height. Incluye métodos para calcular el área y el perímetro del rectángulo. */

class Rectangle { // Definimos la Clase Rectangle
    constructor(width, height) { // Definimos el constructor
        this.width = width;
        this.height = height;
    }

    // Método para calcular el área
    area() {
        return this.width * this.height;
    }

    // Método para calcular el perímetro
    perimeter() {
        return (this.width + this.height) * 2;
    }
}

// Ejemplo de uso de la clase Rectangle
let rectangulo = new Rectangle(7, 8);

console.log("4- Proponemos como ejemplo un rectángulo con ancho de 7 y un alto de 8")
console.log(`Área: ${rectangulo.area()}`); // Salida: Área: 56
console.log(`Perímetro: ${rectangulo.perimeter()}`); // Salida: Perímetro: 30