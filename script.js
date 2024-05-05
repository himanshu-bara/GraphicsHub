
// loader
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");

  // Simulating a 0.5 second delay
  setTimeout(function () {
    loader.style.display = "none";
    document.body.style.display = "block";
  }, 300);
}); 

// JavaScript for social media icon redirection
document.addEventListener("DOMContentLoaded", function() {
    const facebookIcon = document.getElementById("facebook");
    const twitterIcon = document.getElementById("twitter");
    const instagramIcon = document.getElementById("instagram");
  
    if (facebookIcon) {
      facebookIcon.addEventListener("click", function () {
        window.location.href = "https://www.facebook.com/";
      });
    }
  
    if (twitterIcon) {
      twitterIcon.addEventListener("click", function () {
        window.location.href = "https://www.twitter.com/";
      });
    }
  
    if (instagramIcon) {
      instagramIcon.addEventListener("click", function () {
        window.location.href = "https://www.instagram.com/himanshu_.barapatre/";
      });
    }
  });

  //key feature
  window.onload = function() {
    var summaries = document.querySelectorAll('summary');
  
    summaries.forEach(function(summary) {
        function closeSummary() {
            if (summary.parentElement.hasAttribute('open')) {
                summary.parentElement.removeAttribute('open');
            }
        }
  
        setInterval(closeSummary, 20000);
    });
  };

  // about us
  document.getElementById('team-link').addEventListener('click', function(e) {
    e.preventDefault();
    var teamInfo = document.getElementById('team-info');
    if (teamInfo.style.display === 'none') {
        teamInfo.style.display = 'block';
    } else {
        teamInfo.style.display = 'none';
    }
});

function toggleImage() {
  var teamImage = document.getElementById('team-image');
  if (teamImage.style.display === 'none') {
      teamImage.style.display = 'block';
  } else {
      teamImage.style.display = 'none';
  }
}

function showInfo(memberId) {
  var teamMember = document.getElementById(memberId);
  if (teamMember.classList.contains('active')) {
      teamMember.classList.remove('active');
  } else {
      var activeMembers = document.querySelectorAll('.team-member.active');
      for (var i = 0; i < activeMembers.length; i++) {
          activeMembers[i].classList.remove('active');
      }
      teamMember.classList.add('active');
  }
}

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












