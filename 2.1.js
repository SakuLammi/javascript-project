"use strict"
            // Prompt the user for 5 numbers
            let numbers = [];
            for (let i = 1; i <= 5; i++) {
              let num = prompt(`Enter number ${i}:`);
              // Parse the input as a number and push to the array
              numbers.push(parseFloat(num));
            }
            // Reverse the array
            let reversedNumbers = numbers.reverse();

            // Print the reversed array to the console
            console.log("Numbers in reverse order:");
            console.log(reversedNumbers);
