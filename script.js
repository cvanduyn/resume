// Function to toggle the visibility of the "Back to Top" button
window.onscroll = function() {
    toggleBackToTopButton();
};

function toggleBackToTopButton() {
    let backToTopButton = document.getElementById("backToTop"); // Assuming "backToTop" is the ID of the button

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        // Show the button when scrolled down
        backToTopButton.style.display = "block";
    } else {
        // Hide the button when at the top
        backToTopButton.style.display = "none";
    }
}

// Optional smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


document.addEventListener("DOMContentLoaded", function() {
    // Show popup after 2 seconds
    setTimeout(function() {
      document.getElementById("popup").style.display = "block";
    }, 4000);
  
    // Close popup when the close button is clicked
    document.getElementById("closePopup").onclick = function() {
      document.getElementById("popup").style.display = "none";
    };
  
    // Close popup if user clicks outside of it
    window.onclick = function(event) {
      if (event.target == document.getElementById("popup")) {
        document.getElementById("popup").style.display = "none";
      }
    };
  });
