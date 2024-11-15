document.addEventListener("DOMContentLoaded", function() {
    // Get the elements
    const calculationInput = document.getElementById("calculation");
    const calculateButton = document.getElementById("start");
    const resultParagraph = document.getElementById("result");

    // Function to perform the calculation
    calculateButton.addEventListener("click", function() {
        // Get the input expression
        const input = calculationInput.value.trim();

        // Check if input is empty
        if (!input) {
            resultParagraph.textContent = "Please enter a calculation.";
            return;
        }

        // Initialize result variable
        let result;

        // Check for operators and split accordingly
        if (input.includes("+")) {
            const operands = input.split("+");
            if (operands.length === 2) {
                result = parseInt(operands[0]) + parseInt(operands[1]);
            } else {
                resultParagraph.textContent = "Invalid expression.";
                return;
            }
        } else if (input.includes("-")) {
            const operands = input.split("-");
            if (operands.length === 2) {
                result = parseInt(operands[0]) - parseInt(operands[1]);
            } else {
                resultParagraph.textContent = "Invalid expression.";
                return;
            }
        } else if (input.includes("*")) {
            const operands = input.split("*");
            if (operands.length === 2) {
                result = parseInt(operands[0]) * parseInt(operands[1]);
            } else {
                resultParagraph.textContent = "Invalid expression.";
                return;
            }
        } else if (input.includes("/")) {
            const operands = input.split("/");
            if (operands.length === 2) {
                const divisor = parseInt(operands[1]);
                if (divisor === 0) {
                    resultParagraph.textContent = "Error: Division by zero is not allowed.";
                    return;
                }
                result = parseInt(operands[0]) / divisor;
            } else {
                resultParagraph.textContent = "Invalid expression.";
                return;
            }
        } else {
            resultParagraph.textContent = "Invalid operator. Only +, -, *, / are supported.";
            return;
        }

        // Display result
        resultParagraph.textContent = "Result: " + result;
    });
});
