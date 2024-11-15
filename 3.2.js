// Get the target element by its ID
let targetElement = document.getElementById("target");

// Create list items (li) using createElement
let firstItem = document.createElement("li");
firstItem.textContent = "First item";

let secondItem = document.createElement("li");
secondItem.textContent = "Second item";
secondItem.classList.add("my-item"); // Add the class 'my-item' to the second item

let thirdItem = document.createElement("li");
thirdItem.textContent = "Third item";

// Append the list items to the target element
targetElement.appendChild(firstItem);
targetElement.appendChild(secondItem);
targetElement.appendChild(thirdItem);