let velocidadSteve = 0; // Inicia quieto
let steve = document.querySelector(".steve");
let creeper = document.querySelector(".creeper");
let diamantes = document.querySelectorAll(".diamante");
const contadorDiamantes = document.querySelector("#contador-diamantes");
let totalDiamantes = 0;
let moviendo = false; // Estado de movimiento

// Función para mostrar mensajes temporales
function mostrarMensaje(texto) {
    const mensaje = document.getElementById("mensaje-temporal");
    mensaje.textContent = texto;
    mensaje.classList.add("mostrar");

    setTimeout(() => {
        mensaje.classList.remove("mostrar");
    }, 3000);
}

// Saltar
function saltarSteve() {
    steve.style.animation = "saltar 1s ease";
    setTimeout(() => {
        if (moviendo) {
            steve.style.animation = `caminar ${velocidadSteve}s linear infinite`;
        } else {
            steve.style.animation = "none";
        }
    }, 1000);
}

// Alternar movimiento al tocar a Steve
steve.addEventListener("click", () => {
    moviendo = !moviendo;
    if (moviendo) {
        velocidadSteve = 5;
        steve.style.animation = `caminar ${velocidadSteve}s linear infinite`;
    } else {
        velocidadSteve = 0;
        steve.style.animation = "none";
    }
});

// Doble click acelera
function acelerarSteve() {
    if (moviendo) {
        velocidadSteve = 2;
        steve.style.animation = `caminar ${velocidadSteve}s linear infinite`;
    }
}

// Creeper explota
function detonarCreeper() {
    creeper.style.animation = "explotar 1s forwards";
    mostrarMensaje("💥 ¡Creeper explotó!");
}

// Recoger diamante
diamantes.forEach(function (diamante) {
    diamante.addEventListener("click", function () {
        diamante.style.display = "none";
        totalDiamantes++;
        contadorDiamantes.textContent = totalDiamantes;
        mostrarMensaje("💎 ¡Has recogido un diamante!");
    });
});