document.addEventListener("DOMContentLoaded", function() {
    // Get the <p> and <img> elements by their IDs
    const trigger = document.getElementById("trigger");
    const targetImage = document.getElementById("target");

    // Add a mouseover event listener to the <p> element
    trigger.addEventListener("mouseover", function() {
        // Change the image source to picB.jpg when mouse is over
        targetImage.src = "module3-starters-main/t7/img/picB.jpg";
    });

    // Add a mouseout event listener to the <p> element
    trigger.addEventListener("mouseout", function() {
        // Change the image back to picA.jpg when mouse leaves
        targetImage.src = "module3-starters-main/t7/img/picA.jpg";
    });
});