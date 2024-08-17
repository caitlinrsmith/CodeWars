// https://www.codewars.com/kata/5263c6999e0f40dee200059d/train/javascript

function getPINs(observed) {
    // Define a mapping of each digit to its adjacent digits (including itself)
    // This represents the keypad layout described in the problem
    const adjacentDigits = {
      '0': ['0', '8'],
      '1': ['1', '2', '4'],
      '2': ['1', '2', '3', '5'],
      '3': ['2', '3', '6'],
      '4': ['1', '4', '5', '7'],
      '5': ['2', '4', '5', '6', '8'],
      '6': ['3', '5', '6', '9'],
      '7': ['4', '7', '8'],
      '8': ['5', '7', '8', '9', '0'],
      '9': ['6', '8', '9']
    };
  
    // Recursive function to generate all possible PIN combinations
    function generateCombinations(pins, index) {
      // Base case: if we've processed all digits in the observed PIN
      if (index === observed.length) {
        return pins; // Return the current set of PINs
      }
  
      const currentDigit = observed[index]; // Get the current digit from the observed PIN
      const possibleDigits = adjacentDigits[currentDigit]; // Get all possible digits for the current position
      const newPins = []; // Array to store new PIN combinations
  
      // For each existing PIN combination
      for (const pin of pins) {
        // For each possible digit at the current position
        for (const digit of possibleDigits) {
          newPins.push(pin + digit); // Create a new PIN by appending the possible digit
        }
      }
  
      // Recursively generate combinations for the next digit
      return generateCombinations(newPins, index + 1);
    }
  
    // Start the generation process with an empty PIN and index 0
    return generateCombinations([''], 0);
  }