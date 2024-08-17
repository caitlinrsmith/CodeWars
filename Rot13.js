// https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript

// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message) {
    // Split the input message into an array of characters and apply the ROT13 transformation to each character
    return message.split('').map(function(char) {
      // Get the Unicode value of the current character
      const code = char.charCodeAt(0);
  
      // Check if the character is an uppercase letter (A-Z)
      if (code >= 65 && code <= 90) {
        // Shift the character by 13 positions within the uppercase alphabet range
        return String.fromCharCode(((code - 65 + 13) % 26) + 65);
      } 
      // Check if the character is a lowercase letter (a-z)
      else if (code >= 97 && code <= 122) {
        // Shift the character by 13 positions within the lowercase alphabet range
        return String.fromCharCode(((code - 97 + 13) % 26) + 97);
      }
  
      // If the character is not a letter, return it unchanged
      return char;
    }).join(''); // Rejoin the transformed array of characters into a single string
  }  