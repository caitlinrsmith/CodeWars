// https://www.codewars.com/kata/51b66044bce5799a7f000003/train/javascript

class RomanNumerals {
    // Converts an integer to its Roman numeral representation
    static toRoman(num) {
      // Define a list of Roman numeral values and their corresponding symbols
      const romanNumerals = [
        { value: 1000, numeral: 'M' }, // 1000 = M
        { value: 900, numeral: 'CM' },  // 900 = CM
        { value: 500, numeral: 'D' },   // 500 = D
        { value: 400, numeral: 'CD' },  // 400 = CD
        { value: 100, numeral: 'C' },   // 100 = C
        { value: 90, numeral: 'XC' },   // 90 = XC
        { value: 50, numeral: 'L' },    // 50 = L
        { value: 40, numeral: 'XL' },   // 40 = XL
        { value: 10, numeral: 'X' },    // 10 = X
        { value: 9, numeral: 'IX' },    // 9 = IX
        { value: 5, numeral: 'V' },     // 5 = V
        { value: 4, numeral: 'IV' },    // 4 = IV
        { value: 1, numeral: 'I' },     // 1 = I
      ];
  
      let result = ''; // Initialize the result string to store the Roman numeral
  
      // Loop through each Roman numeral, starting from the highest value
      for (const { value, numeral } of romanNumerals) {
        // While the current number is greater than or equal to the Roman numeral value
        while (num >= value) {
          result += numeral; // Append the Roman numeral to the result
          num -= value; // Subtract the value from the number
        }
      }
      return result; // Return the final Roman numeral string
    }
  
    // Converts a Roman numeral string to its integer representation
    static fromRoman(str) {
      // Map of Roman numeral characters to their corresponding integer values
      const romanToInt = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1,
      };
  
      let result = 0; // Initialize the result variable to store the integer value
  
      // Loop through each character in the Roman numeral string
      for (let i = 0; i < str.length; i++) {
        const current = romanToInt[str[i]]; // Get the integer value of the current Roman numeral
        const next = romanToInt[str[i + 1]]; // Get the integer value of the next Roman numeral
  
        // If the current value is less than the next value, it indicates a subtractive combination (e.g., IV = 4)
        if (next && current < next) {
          result += next - current; // Add the difference (next - current) to the result
          i++; // Skip the next character since it has already been processed
        } else {
          result += current; // Otherwise, add the current value to the result
        }
      }
      return result; // Return the final integer value
    }
  }