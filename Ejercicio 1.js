const prompt = require('prompt-sync')();

// Solicita el número al usuario mediante una ventana emergente
let entrada = prompt("Por favor, ingresa un número entero:");

// Convierte la entrada a un número entero
let numero = parseInt(entrada);

// Verifica si el valor ingresado es un número válido
if (isNaN(numero)) {
    console.log("Por favor, ingresa un número válido.");
} else {
    // Evalúa si es Positivo, Negativo o Cero
    if (numero > 0) {
        console.log("Positivo");
    } else if (numero < 0) {
        console.log("Negativo");
    } else {
        console.log("Cero");
    }
}