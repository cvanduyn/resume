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
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("closePopup");

  // Check if the popup has been dismissed before
  if (!localStorage.getItem("popupDismissed")) {
      // Show the popup after 2 seconds if not dismissed
      setTimeout(function() {
          popup.style.display = "block";
      }, 2000);
  }

  // Close the popup and set it as dismissed in localStorage
  closeBtn.addEventListener("click", function() {
      popup.style.display = "none";
      localStorage.setItem("popupDismissed", "true");
  });

  // Close the popup if user clicks outside of it
  window.onclick = function(event) {
      if (event.target == popup) {
          popup.style.display = "none";
          localStorage.setItem("popupDismissed", "true");
      }
  };
});
