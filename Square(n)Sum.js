// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

// Complete the square sum function so that it squares each number passed into it and then sums the results together. For example, for [1, 2, 2] it should return 9

function squareSum(numbers) {
    // Map each number to its square and then sum them using reduce
    return numbers.map(num => num * num).reduce((acc, curr) => acc + curr, 0);
  }
  
  // Example usage:
//   console.log(squareSum([1, 2, 2])); // Output: 9 (1^2 + 2^2 + 2^2 = 1 + 4 + 4 = 9)

// Explanation:
// Square each number:

// numbers.map(num => num * num)
// The map method iterates through the numbers array, squares each element, and returns a new array of squared numbers.

// Sum the squared numbers:

// .reduce((acc, curr) => acc + curr, 0)
// The reduce method takes an accumulator (acc) and the current element (curr), adds them together, and returns the final sum. The initial value of the accumulator is 0.
  