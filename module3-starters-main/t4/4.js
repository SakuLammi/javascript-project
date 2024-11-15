// Log to check if the script is loaded
console.log("Script loaded!");

// Define the 'students' array with each student having a name and a corresponding value
let students = [
    { name: 'John', value: '2345768' },
    { name: 'Paul', value: '2134657' },
    { name: 'Jones', value: '5423679' }
];

// Get the target <select> element by its ID
let targetElement = document.getElementById("target");

// Log to confirm the element was found
console.log("Target element:", targetElement);

// Loop through the 'students' array and create <option> elements for each student
for (let i = 0; i < students.length; i++) {
    // Create a new <option> element
    let option = document.createElement("option");
    
    // Set the value and text content of the <option> element
    option.value = students[i].value;
    option.textContent = students[i].name;

    // Append the <option> element to the target <select> element
    targetElement.appendChild(option);
}

// Log the final HTML of the select element to verify
console.log("Final HTML of the select element:", targetElement.innerHTML);