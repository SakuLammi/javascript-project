"use strict";
// Wait until the document is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select the button element
    const button = document.querySelector("button");  // Using querySelector for simplicity

    // Add a click event listener to the button
    button.addEventListener("click", function() {
        // Show an alert when the button is clicked
        alert("Button Clicked");
    });
});
