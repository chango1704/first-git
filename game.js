console.log("jueguito uwu2");
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0; // contador de intentos

console.log("Adivina el número entre 1 y 100");

function preguntar() {
    rl.question("Tu número: ", (respuesta) => {
        const intento = parseInt(respuesta);

        // Validación de entrada
        if (isNaN(intento)) {
            console.log("❌ Ingresa un número válido.");
            return preguntar();
        }

        intentos++; // sumar intento válido

        if (intento === numeroSecreto) {
            console.log(`🎉 ¡Correcto! Lo lograste en ${intentos} intento(s).`);
            rl.close();
        } else {
            const pista = Math.abs(numeroSecreto - intento) <= 10 ? "Caliente 🔥" : "Frío ❄️";
            console.log(pista);
            preguntar();
        }
    });
}

preguntar();
