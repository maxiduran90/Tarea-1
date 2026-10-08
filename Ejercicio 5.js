const prompt = require('prompt-sync')();
// 1. Pedir al usuario que ingrese su calificación
let calificacion = prompt("Por favor, ingresa tu calificación (entre 0 y 100):");

// 2. Convertir el texto ingresado a un número entero
calificacion = parseInt(calificacion);

// 3. Validar que sea un número válido dentro del rango
if (isNaN(calificacion) || calificacion < 0 || calificacion > 100) {
    alert("Por favor, ingresa un número válido entre 0 y 100.");
} else {
    let letra = "";

    // 4. Determinar la equivalencia en letras
    if (calificacion >= 90 && calificacion <= 100) {
        letra = "A";
    } else if (calificacion >= 80) {
        letra = "B";
    } else if (calificacion >= 70) {
        letra = "C";
    } else if (calificacion >= 60) {
        letra = "D";
    } else {
        letra = "F";
    }

    // 5. Mostrar el resultado
    alert("Tu calificación equivalente es: " + letra);
}
