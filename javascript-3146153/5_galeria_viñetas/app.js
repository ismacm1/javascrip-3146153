
const monedas = document.querySelectorAll(".coin");
const corazones = document.querySelectorAll(".corazon");
const contadorMonedas = document.querySelector("#contador-monedas");
const contadorCorazones = document.querySelector("#contador-corazones");
let totalMonedas = 0;
let totalCorazones = 0;

/* console.log(monedas, corazon, contadorMonedas, contadorCorazones); */

monedas.forEach(function (moneda) {

    moneda.addEventListener("click", function () {
        moneda.classList.add("saltar");
        totalMonedas++
        contadorMonedas.textContent = totalMonedas

    })

})

corazones.forEach(function (corazon) {

    corazon.addEventListener("click", function () {
        corazon.classList.add("saltar");
        totalCorazones++;
        contadorCorazones.textContent = totalCorazones;
    })
})

//Galeria
const escenas = document.querySelectorAll(".escena");
const btnAnterior = document.querySelector(".anterior");
const btnSiguiente = document.querySelector(".siguiente");
const miniaturas = document.querySelectorAll(".miniaturas img");
let indice = 0 

//console.log(escenas)
//console.log(escenas [1])

function mostrarEscena(i){
 /*    console.log(escenas[1]) */
  for (let j = 0; j < escenas.length; j++) {
    escenas[j].classList.remove("activa");
    }
    escenas[i].classList.add("activa");
    indice = i;
}

//Boton siuguiente
btnSiguiente.addEventListener("click", function(){
    indice = indice + 1
    if (indice >= escenas.length){
        indice = 0 //para regresar a la primera escena
    }
    mostrarEscena(indice)
})
//Boton anterior
btnAnterior.addEventListener("click", function(){
    indice = indice - 1
    if (indice < 0){
        indice = escenas.length - 1 //para regresar a la ultima escena
    }
    mostrarEscena(indice)
})
//Miniaturas
miniaturas.forEach(function(miniatura, i){ 
    miniatura.addEventListener("click", function(){
        mostrarEscena(i) //
    })
})