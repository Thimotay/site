/* =========== Documentation ===========
https://www.w3schools.com/jsref/dom_obj_event.asp

https://www.w3schools.com/html/html5_canvas.asp
https://www.w3schools.com/tags/ref_canvas.asp

*/

var selector = document.getElementById("sel");
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var fps = 1;
var sortType = getSelectorValue();
var arrayLength = 100;

/* =========== Handle the resize of the canvas =========== */
updateCanvasSize();
window.addEventListener("resize", updateCanvasSize);
function updateCanvasSize() {
  canvas.setAttribute('width', window.getComputedStyle(canvas, null).getPropertyValue("width"));
  canvas.setAttribute('height', window.getComputedStyle(canvas, null).getPropertyValue("height"));
}

/* =========== Selector =========== */

function setSortType(){
  sortType = getSelectorValue();
}

function getSelectorValue(){
  return selector.selectedIndex
}

/* =========== Function repeated =========== */
var intervalId = window.setInterval(function(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  switch (sortType) {
    case 0:
      drawRect();
      break;
    case 1:
      drawRedRect();
      break;
    default:
      drawBlueRect();
      break;
  }
}, 1000/fps);

/* =========== Randomizer =========== */

function randomArray(length) {
  var res = [];
  for (let i = 0; i < length; i++) {
    res.push(Math.random());
  }
  return res;
}

/* =========== Insertion Sort =========== */

function drawRect(){
  ctx.beginPath();
  ctx.lineWidth = "2";
  ctx.strokeStyle = "#FFFFFF";
  ctx.rect(20, 20, 1300, 900);
  ctx.stroke();
  ctx.beginPath();
  ctx.lineWidth = "4";
  ctx.strokeStyle = "#999999";
  ctx.rect(100, 300, 500, 500);
  ctx.stroke();

  ctx.beginPath();
  var numArray = randomArray(arrayLength);
  ctx.fillStyle = "#FFFFFF";
  for (let i = 0; i < numArray.length; i++) {
    ctx.rect(100 + 500/numArray.length*i, 800 - 500*numArray[i], 500 / numArray.length, 500*numArray[i]);
  } 
  ctx.fill();
}
function drawRedRect(){
  ctx.beginPath();
  ctx.lineWidth = "2";
  ctx.strokeStyle = "#FF0000";
  ctx.rect(20, 20, 1300, 900);
  ctx.rect(100, 300, 500, 500);
  ctx.stroke();
}
function drawBlueRect(){
  ctx.beginPath();
  ctx.lineWidth = "2";
  ctx.strokeStyle = "#0000FF";
  ctx.rect(20, 20, 1300, 900);
  ctx.rect(100, 300, 500, 500);
  ctx.stroke();
}


