/* =========== Documentation ===========
https://www.w3schools.com/jsref/dom_obj_event.asp

https://www.w3schools.com/html/html5_canvas.asp
https://www.w3schools.com/tags/ref_canvas.asp

*/

var selector = document.getElementById("sel");
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var fps = 1;
var sortType;

var arrayLength = 100;
var numArray;
var numArrayV2;
var step;

setSortType();


/* =========== Handle the resize of the canvas =========== */
updateCanvasSize();
window.addEventListener("resize", updateCanvasSize);

function updateCanvasSize() {
  canvas.setAttribute('width', window.getComputedStyle(canvas, null).getPropertyValue("width"));
  canvas.setAttribute('height', window.getComputedStyle(canvas, null).getPropertyValue("height"));
}

/* =========== Selector =========== */

function setSortType(){
  if  (sortType != getSelectorValue()){
    sortType = getSelectorValue();
    initializeSort();
  }
}

function getSelectorValue(){
  return selector.selectedIndex;
}

function initializeSort() {
  switch (sortType) {
    case 0:
      initializeInsertionSort();
      break;
    case 1:
      initializeQuickSort();
      break;
    default:
      break;
  }
}

/* =========== Function repeated =========== */

// TODO:TEMPORAIRE JE PENSE
var intervalId = window.setInterval(function(){
  switch (sortType) {
    case 0:
      performInsertionSort();
      break;
    case 1:
      drawRedRect();
      break;
    default:
      drawBlueRect();
      break;
  }
}, 1000/fps);
  

function drawVisual(oriX, oriY, width, height, nbArray) {
  for (let i = 0; i < nbArray.length; i++) {
    ctx.beginPath();
    ctx.fillStyle = nbArray[i][1];
    ctx.rect(oriX + width/nbArray.length*i, oriY + height*( 1 - nbArray[i][0]), width / nbArray.length, height*nbArray[i][0]);
    ctx.fill();
  }
}

function getIndexOfFirstValidValue(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i][1] != '#000000') {
      return i;
    }
  }
  
}

/* =========== Randomizer =========== */

function randomArray(length) {
  var res = [];
  for (let i = 0; i < length; i++) {
    res.push([Math.random(), '#FFFFFF']);
  }
  return res;
}

function zeroArray(length) {
  var res = [];
  for (let i = 0; i < length; i++) {
    res.push([0, '#FFFFFF']);
  }
  return res;
}

/* =========== Insertion Sort =========== */

function performInsertionSort() {
  for (let i = 0; i < numArray.length; i++) {
    performInsertionStep(i);
  }
}

function initializeInsertionSort() {
  numArray = randomArray(arrayLength);
  numArrayV2 = zeroArray(arrayLength);
}

function drawInsertionSort(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.lineWidth = "2";
  ctx.strokeStyle = "#FFFFFF";
  ctx.rect(20, 20, 1300, 900);
  ctx.stroke();
  ctx.beginPath();
  ctx.lineWidth = "4";
  ctx.strokeStyle = "#999999";
  ctx.rect(100, 300, 500, 500);
  ctx.rect(700, 300, 500, 500);
  ctx.stroke();

  drawVisual(100, 300, 500, 500, numArray);
  drawVisual(700, 300, 500, 500, numArrayV2);
}

function performInsertionStep(step){
  var index = getIndexOfFirstValidValue(numArray);
  for (let i = 1; i < numArray.length; i++) {
    if (numArray[i-1][1] != '#FF0000' && numArray[i-1][1] != '#000000') {
      numArray[i-1][1] = '#FFFFFF';
    }
    if (numArray[i][1] != '#000000') {
      numArray[i][1] = '#00FF00';
    }
    if (numArray[i][0] < numArray[index][0] && numArray[i][1] != '#000000') {
      numArray[index][1] = '#FFFFFF';
      index = i;
      numArray[index][1] = '#FF0000';
    }
  }
  numArray[index][1] = '#000000';
  numArrayV2[step][0] = numArray[index][0];
  drawInsertionSort();
}

/* =========== Quick Sort =========== */

function initializeQuickSort() {

}

function drawRedRect(){
  ctx.beginPath();
  ctx.lineWidth = "2";
  ctx.strokeStyle = "#FF0000";
  ctx.rect(20, 20, 1300, 900);
  ctx.rect(100, 300, 500, 500);
  ctx.stroke();
}

/* =========== Other Sort =========== */

function drawBlueRect(){
  ctx.beginPath();
  ctx.lineWidth = "2";
  ctx.strokeStyle = "#0000FF";
  ctx.rect(20, 20, 1300, 900);
  ctx.rect(100, 300, 500, 500);
  ctx.stroke();
}
