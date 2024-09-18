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


