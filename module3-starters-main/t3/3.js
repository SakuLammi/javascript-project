// Define the array of names
let names = ['John', 'Paul', 'Jones'];

// Get the target element by its ID
let targetElement = document.getElementById("target");

// Start with an empty string to build the HTML content
let htmlContent = '';

// Loop through the 'names' array and create <li> elements for each name
for (let i = 0; i < names.length; i++) {
    htmlContent += `<li>${names[i]}</li>`;
}

// Set the innerHTML of the target element to the new HTML content
targetElement.innerHTML = htmlContent;