console.log("jueguito uwu2");
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numeroSecreto = Math.floor(Math.random() * 100) + 1;

console.log("Adivina el número entre 1 y 100");

function preguntar() {
    rl.question("Tu número: ", (respuesta) => {
        const intento = parseInt(respuesta);

        // Validación de entrada
        if (isNaN(intento)) {
            console.log("❌ Ingresa un número válido.");
            return preguntar();
        }

        if (intento === numeroSecreto) {
            console.log("🎉 ¡Correcto!");
            rl.close();
        } else {
            const pista = Math.abs(numeroSecreto - intento) <= 10 ? "Caliente 🔥" : "Frío ❄️";
            console.log(pista);
            preguntar();
        }
    });
}

preguntar();
