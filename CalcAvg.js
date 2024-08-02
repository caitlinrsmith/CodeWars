// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
    if (array.length === 0) return 0;
    
    const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / array.length;
  }

//   Explanation:
// Check if the array is empty:

// if (array.length === 0) return 0;
// This condition checks if the array has no elements and returns 0 if true.
// Calculate the sum of the array:

// array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// The reduce method is used to accumulate the sum of the elements in the array. The initial value of the accumulator is set to 0.
// Calculate and return the average:

// return sum / array.length;
// The sum of the elements is divided by the number of elements to get the average.

// instead of using an arrow function: const sum = array.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue;
// }, 0);

