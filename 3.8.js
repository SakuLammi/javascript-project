document.addEventListener("DOMContentLoaded", function() {
    // Get the elements
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const operationSelect = document.getElementById("operation");
    const calculateButton = document.getElementById("start");
    const resultParagraph = document.getElementById("result");

    // Function to perform the calculation
    calculateButton.addEventListener("click", function() {
        // Get the input values and selected operation
        const num1 = parseFloat(num1Input.value); // Convert to float
        const num2 = parseFloat(num2Input.value); // Convert to float
        const operation = operationSelect.value;

        // Check if the inputs are valid numbers
        if (isNaN(num1) || isNaN(num2)) {
            resultParagraph.textContent = "Please enter valid numbers in both fields.";
            return; // Stop further execution if input is invalid
        }

        let result;

        // Perform calculation based on the selected operation
        switch (operation) {
            case "add":
                result = num1 + num2;
                break;
            case "sub":
                result = num1 - num2;
                break;
            case "multi":
                result = num1 * num2;
                break;
            case "div":
                if (num2 === 0) {
                    result = "Error: Division by zero is not allowed!";
                } else {
                    result = num1 / num2;
                }
                break;
            default:
                result = "Invalid operation";
                break;
        }

        // Display the result in the paragraph
        resultParagraph.textContent = "Result: " + result;
    });
});
