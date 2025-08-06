const img = document.querySelector("#imagenMario");

const Btn1 = document.querySelector("#Btn1");
const Btn2 = document.querySelector("#Btn2");
const Btn3 = document.querySelector("#Btn3");





function blancoyNegro() {
    img.style.filter = "grayscale(100%)";
    console.log("Aplicando filtro blanco");
    }
function desenfoque() {
    img.style.filter = "blur(5px)"; 
  }


  function zoomYRotacion() {
    img.style.transform = "scale(1.2) rotate(15deg)";
    img.style.transition = "transform 0.5s ease"; 
}




Btn1. addEventListener("click", blancoyNegro);
Btn2. addEventListener("click", desenfoque); 
Btn3. addEventListener("click", zoomYRotacion);


if (Btn1 && Btn2 && Btn3) {
    false;

}
