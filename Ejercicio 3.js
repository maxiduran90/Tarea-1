const prompt = require('prompt-sync')();
// Solicitar la edad al usuario
let entrada = prompt("Por favor, introduce tu edad:");

// Convertir la entrada a un número entero
let edad = parseInt(entrada);

// Validar si la entrada es un número válido y positivo
if (isNaN(edad) || edad < 0) {
    console.log("Por favor, introduce una edad válida.");
} else {
    // Determinar la etapa de la vida
    if (edad < 12) {
        console.log("Te encuentras en la etapa: Niño.");
    } else if (edad >= 12 && edad <= 17) {
        console.log("Te encuentras en la etapa: Adolescente.");
    } else if (edad >= 18 && edad <= 64) {
        console.log("Te encuentras en la etapa: Adulto.");
    } else {
        console.log("Te encuentras en la etapa: Adulto mayor.");
    }
}
