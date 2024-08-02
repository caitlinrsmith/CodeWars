// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript

// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result,

var summation = function (num) {
    // Initialize the sum to 0
    let sum = 0;
    
    // Loop through each number from 1 to num and add to sum
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    
    // Return the calculated sum
    return sum;
  };

  