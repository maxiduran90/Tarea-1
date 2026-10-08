const prompt = require('prompt-sync')();
// Solicitar las longitudes de los tres lados al usuario
const lado1 = parseFloat(prompt("Introduce la longitud del primer lado:"));
const lado2 = parseFloat(prompt("Introduce la longitud del segundo lado:"));
const lado3 = parseFloat(prompt("Introduce la longitud del tercer lado:"));

// Validar que los datos ingresados sean números válidos y mayores que cero
if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3) || lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
    console.log("Por favor, introduce longitudes válidas y mayores que cero.");
} else {
    // Determinar el tipo de triángulo
    if (lado1 === lado2 && lado2 === lado3) {
        console.log("El triángulo es Equilátero (todos los lados son iguales).");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log("El triángulo es Isósceles (dos lados son iguales).");
    } else {
        console.log("El triángulo es Escaleno (todos los lados son diferentes).");
    }
}
