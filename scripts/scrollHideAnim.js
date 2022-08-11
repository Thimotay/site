/* Sample code from https://alvarotrigo.com/blog/css-animations-scroll/ */

function animate() {
  var revealElements = document.querySelectorAll(".scrollReveal");
  for (var i = 0; i < revealElements.length; i++) {
      var windowHeight = window.innerHeight;
      var elementBottom = revealElements[i].getBoundingClientRect().bottom;
      if (elementBottom < 0) {
        revealElements[i].classList.add("active");
      } else {
        revealElements[i].classList.remove("active");
      }
  }
}

window.addEventListener("scroll", animate);

animate();
