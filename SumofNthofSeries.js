// https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript

function seriesSum(n) {
    // Handle the edge case where n is 0
    if (n === 0) {
        return "0.00";
    }
    
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += 1 / (3 * i + 1);
    }
    
    // Round the result to 2 decimal places and return it as a string
    return sum.toFixed(2);
}

// Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).


// You will need to figure out the rule of the series to complete this.

// Rules
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return "0.00".

// You will only be given Natural Numbers as arguments.


// Explanation

// Identify the Denominator Pattern: The 
// 𝑘
// k-th term in the denominator can be expressed as 3k−2.
// Sum the Series: To find the sum of the first n terms, we add the reciprocals of these denominators.
// Edge Case: If n is 0, return "0.00".
// Round the Result: The final sum should be rounded to 2 decimal places and returned as a string.