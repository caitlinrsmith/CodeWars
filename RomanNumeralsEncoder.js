// https://www.codewars.com/kata/51b62bf6a9c58071c600001b/solutions/javascript

function solution(number) {
    // Validate the input number to ensure it is within the valid range for Roman numerals (1 to 3999).
    if (number < 1 || number > 3999) {
      throw new Error("Number must be between 1 and 3999");
    }
  
    // Define an array of objects where each object represents a Roman numeral and its corresponding integer value.
    const romanNumerals = [
      { value: 1000, symbol: 'M' },  // 'M' represents 1000
      { value: 900, symbol: 'CM' },  // 'CM' represents 900
      { value: 500, symbol: 'D' },   // 'D' represents 500
      { value: 400, symbol: 'CD' },  // 'CD' represents 400
      { value: 100, symbol: 'C' },   // 'C' represents 100
      { value: 90, symbol: 'XC' },   // 'XC' represents 90
      { value: 50, symbol: 'L' },    // 'L' represents 50
      { value: 40, symbol: 'XL' },   // 'XL' represents 40
      { value: 10, symbol: 'X' },    // 'X' represents 10
      { value: 9, symbol: 'IX' },    // 'IX' represents 9
      { value: 5, symbol: 'V' },     // 'V' represents 5
      { value: 4, symbol: 'IV' },    // 'IV' represents 4
      { value: 1, symbol: 'I' }      // 'I' represents 1
    ];
  
    // Initialize an empty string to accumulate the resulting Roman numeral.
    let result = '';
  
    // Iterate through each Roman numeral, starting from the largest value.
    for (let i = 0; i < romanNumerals.length; i++) {
      // While the current Roman numeral's value can be subtracted from the number,
      // append the corresponding Roman numeral symbol to the result string and
      // subtract its value from the number.
      while (number >= romanNumerals[i].value) {
        result += romanNumerals[i].symbol;
        number -= romanNumerals[i].value;
      }
    }
  
    // Return the final Roman numeral representation.
    return result;
  }
  