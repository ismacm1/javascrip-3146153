const monedas = document.querySelectorAll(".coin")
const corazones = document.querySelectorAll(".corazon")
const contadorMonedas = document.querySelector("#contador-monedas")
const contadorCorazones = document.querySelector("#contador-corazones")
let totalMonedas = 0
let totalCorazones = 0
const audio1 = document.querySelector("#audio-1");
const audio2 = document.querySelector("#audio-2");
const audio3 = document.querySelector("#audio-3");
const playstop = document.querySelector("#play-stop");

console.log(monedas, corazones, contadorMonedas, contadorCorazones)

monedas.forEach( function (moneda){
   
    moneda.addEventListener( "click" , function () {
        moneda.classList.add("saltar")
        totalMonedas++
        contadorMonedas.textContent = totalMonedas

        if (audio1.paused) {
        audio1.play();
        
        } else {
        audio1.pause();
        
       }
        
        
         } )



} )
corazones.forEach( function (corazon){
    
     corazon.addEventListener( "click" , function () {
          corazon.classList.add("saltar")
            totalCorazones++
            contadorCorazones.textContent = totalCorazones

              if (audio2.paused) {
                audio2.play();
        
              } else {
                audio2.pause();
         }
          
          
            } )

})

function toggleAudiotres() {
    if (audio3.paused) {
        audio3.play();
        playstop.textContent = "stop"
       
    } else {
        audio3.pause();
        playstop.textContent = "play"
        
    }
}

playstop.addEventListener("click", toggleAudiotres);


// Funcion Boton siguiente galeria
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const escena1 = document.querySelector(".escena-1");
const escena2 = document.querySelector(".escena-2");  
const escena3 = document.querySelector(".escena-3");
let i = 1;

next.addEventListener("click", function (){
 if(i === 1){
   escena1.classList.add("d-none")
    escena2.classList.remove("d-none")
    i++ 
    // Incrementar el índice para la siguiente escena
  } else if (i == 2) {
    escena2.classList.add("d-none")
    escena3.classList.remove("d-none")
    i++
  }
})
