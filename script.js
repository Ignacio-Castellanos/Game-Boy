var buttonA = document.getElementById("buttonA");
var buttonB = document.getElementById("buttonB");
var buttonUp = document.getElementById("buttonUp");
var buttonDown = document.getElementById("buttonDown");
var buttonLeft = document.getElementById("buttonLeft");
var buttonRight = document.getElementById("buttonRight");
var buttonStart = document.getElementById("buttonStart");
var buttonSelect = document.getElementById("buttonSelect");


buttonA.addEventListener("click", function() {
  console.log("Botón A presionado");
});

buttonB.addEventListener("click", function() {
  console.log("Botón B presionado");
});

buttonUp.addEventListener("click", function() {
  console.log("Botón arriba presionado");
});

buttonDown.addEventListener("click", function() {
  console.log("Botón abajo presionado");
});

buttonLeft.addEventListener("click", function() {
  console.log("Botón izquierdo presionado");
});

buttonRight.addEventListener("click", function() {
  console.log("Botón derecho presionado");
});

buttonStart.addEventListener("click", function() {
  console.log("Botón Start presionado");
});
