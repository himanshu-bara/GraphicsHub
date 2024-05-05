// loader
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
  
    // Simulating a 0.5 second delay
    setTimeout(function () {
      loader.style.display = "none";
      document.body.style.display = "block";
    }, 500);
  }); 
  
  //get start button
  document.getElementById('cta-button').addEventListener('click', function() {
    // Redirect to the signup page
    window.location.href = 'signup.html'; // Replace 'signup.html' with the actual URL of your desired page
  });

  
  //testimonials
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("testimonial");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
        slides[i].style.transform = "translateX(-10px)";
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    fadeIn(slides[slideIndex-1]);
}

function fadeIn(element) {
    var op = 0;
    var timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.transform = "translateX(0)";
        op += 0.1;
    }, 100);
}
