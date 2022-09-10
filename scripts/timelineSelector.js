function displayElement(sel) {
  var selectedElement = document.querySelector(sel);
  var elements = document.querySelectorAll(".timelineDescription");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove("active");
  }
  selectedElement.classList.add("active");
}

displayElement(".exp5");
