// Wait until the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select the form element
    const form = document.getElementById('source');

    // Add an event listener for the form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the form from being submitted

        // Get the values from the input fields
        const firstName = document.querySelector('input[name="firstname"]').value;
        const lastName = document.querySelector('input[name="lastname"]').value;

        // Select the target paragraph
        const target = document.getElementById('target');

        // Display the result in the target paragraph
        target.textContent = `Your name is ${firstName} ${lastName}`;
    });
});