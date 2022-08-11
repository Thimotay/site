function darker() {
  var elements = document.querySelectorAll(".main_section");
  var windowMiddle = window.innerHeight/2;
  for (var i = 0; i < elements.length; i++) {
    var elementTop = elements[i].getBoundingClientRect().top;
    var elementBot = elements[i].getBoundingClientRect().bottom;
    if (elementTop < windowMiddle && elementBot > windowMiddle) {
      elements[i].classList.remove("active");
    } else {
      elements[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", darker);

darker();
