// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

function makeNegative(num) {
    return num <= 0 ? num : -num;
}

// Explanation:
// num <= 0 ? num : -num:
// This is a ternary operator that checks if the number is less than or equal to zero.
// If num is less than or equal to zero, it returns num (which is already negative or zero).
// If num is greater than zero, it returns -num to convert it to a negative number.