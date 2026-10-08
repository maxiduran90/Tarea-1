const prompt = require('prompt-sync')();
// 1. Pedir el número al usuario
let entrada = prompt("Por favor, ingresa un número:");

// 2. Convertir la entrada a un número entero
let numero = parseInt(entrada);

// 3. Verificar si es un número válido
if (isNaN(numero)) {
    alert("Eso no es un número válido.");
} 

else {
    // 4. Determinar si es par o impar usando el operador módulo (%)
    if (numero % 2 === 0) {
        alert(`El número ${numero} es PAR.`);
    } else {
        alert(`El número ${numero} es IMPAR.`);
    }
}
