$(document).ready(function(){
    var i = 0;
    var txt = 'Bring Power to Your<br>Steps.'; /* The text */
    var speed = 50; /* The speed/duration of the effect in milliseconds */
    
    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("h1").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    });