//www.codewars.com/kata/55d8aa568dec9fb9e200004a/javascript

function selNumber(n, d) {
    // Helper function to check if the number has increasing digits and unique digits
    function isValid(num) {
        const digits = num.toString().split('').map(Number);
        if (digits.length < 2) return false; // Must have at least two digits
        
        // Check if digits are in strictly increasing order and unique
        for (let i = 0; i < digits.length - 1; i++) {
            if (digits[i] >= digits[i + 1] || digits.indexOf(digits[i]) !== digits.lastIndexOf(digits[i])) {
                return false;
            }
        }
        
        // Check the difference between contiguous digits
        for (let i = 0; i < digits.length - 1; i++) {
            if (digits[i + 1] - digits[i] > d) {
                return false;
            }
        }
        
        return true;
    }
    
    let count = 0;
    for (let i = 12; i <= n; i++) { // Start from 12 as we need at least two digits
        if (isValid(i)) {
            count++;
        }
    }
    
    return count;
}

// Explanation:
// isValid Function:

// Converts the number to a string and then to an array of digits.
// Checks if digits are in strictly increasing order and ensures no digit repeats.
// Verifies that the difference between consecutive digits does not exceed d.
// selNumber Function:

// Iterates from 12 to n (inclusive), checking each number with the isValid function.
// Counts how many numbers meet all the constraints and returns this count.

// This implementation efficiently checks the constraints and calculates the count of valid numbers within the given range.