// nav responsive
     function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
     }
     var slideIndex = 0;
   carousel();
   // slide functionality
   function carousel() {
   var i;
   var x = document.getElementsByClassName("mySlides");
   for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
   }
   slideIndex++;
   if (slideIndex > x.length) {slideIndex = 1}
   x[slideIndex-1].style.display = "block";
   setTimeout(carousel, 2000); // Change image every 2 seconds
   }
