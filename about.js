
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














