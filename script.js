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

document.addEventListener("DOMContentLoaded", () => {
  const slider = new KeenSlider("#all_testimonials", {
    loop: true,                // Loop through slides
    centered: true,            // Centers the active slide
    slidesPerView: 1.5,        // Show part of the next slide
    spacing: 20,               // Space between slides
    breakpoints: {
      "(min-width: 600px)": {
        slidesPerView: 2.5,    // Show 2.5 slides on medium screens
        spacing: 20,           // Adjust space between slides
      },
      "(min-width: 1000px)": {
        slidesPerView: 3.5,    // Show 3.5 slides on large screens
        spacing: 30,           // More space between slides on large screens
      },
    },
  });
});

