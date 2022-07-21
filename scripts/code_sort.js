/*
https://www.w3schools.com/jsref/dom_obj_event.asp

https://www.w3schools.com/html/html5_canvas.asp
https://www.w3schools.com/tags/ref_canvas.asp
*/

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var fps = 

/* =========== Handle the resize of the canvas =========== */
updateCanvasSize();
window.addEventListener("resize", updateCanvasSize);
function updateCanvasSize() {
  canvas.setAttribute('width', window.getComputedStyle(canvas, null).getPropertyValue("width"));
  canvas.setAttribute('height', window.getComputedStyle(canvas, null).getPropertyValue("height"));
}

/* =========== Function repeated =========== */
var intervalId = window.setInterval(function(){
  drawRect();
}, 1000/fps);


function drawRect(){
  ctx.beginPath();
  ctx.lineWidth = "4";
  ctx.strokeStyle = "#FF0000";
  //ctx.fillStyle = "#00FF00";
  ctx.rect(20, 20, 150, 100);
  ctx.stroke();
  //ctx.fill();
}
