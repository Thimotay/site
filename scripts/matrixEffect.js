/*
Pour l'utiliser il faut mettre la classe "applyMatrixEffect" à l'élément concerné et  
mettre en id le texte qui doit y être affiché

monospace font-families : 
"Lucida Console"
"Courier New"  à toujours mettre (web safe)
"Monaco"
<link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet">
*/

function matrixEffect() {
    var matrixElements = document.querySelectorAll(".applyMatrixEffect");
    var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890";
    for (var i = 0; i < matrixElements.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = matrixElements[i].getBoundingClientRect().top;
        var offset = windowHeight*0.06;
        if (elementTop > windowHeight - offset*3 || elementTop < offset) {
            var length = matrixElements[i].innerHTML.length;
            var newWord = "";
            for (var j = 0; j < length; j++){
                newWord += characters.charAt(Math.floor(Math.random()*63));
                //newWord += Math.floor(Math.random()*10);
            }
            matrixElements[i].innerHTML = newWord;
        } else {
            matrixElements[i].innerHTML=matrixElements[i].id;
        }
    }
}

  window.addEventListener("scroll", matrixEffect);


