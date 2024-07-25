// Function to find the minimum value in an array of numbers
var min = function(list) {
    // Use the spread operator to pass array elements as individual arguments to Math.min
    return Math.min(...list);
};

// Function to find the maximum value in an array of numbers
var max = function(list) {
    // Use the spread operator to pass array elements as individual arguments to Math.max
    return Math.max(...list);
};
