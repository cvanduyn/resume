function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    //Call showPopup here

    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element); 
    
    // Reset the value of the textarea
    recommendation.value = "";
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}

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
