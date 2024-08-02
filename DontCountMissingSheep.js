// https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

function countSheeps(sheep) {
    return sheep.filter(Boolean).length;
}

// Explanation:
// filter(Boolean):

// The filter method creates a new array with all elements that pass the test implemented by the provided function.
// Passing Boolean as a function to filter converts each element to its boolean value. This effectively filters out false, null, undefined, 0, NaN, and "" (empty string), leaving only true values.
// .length:

// After filtering, the length property gives the number of true values in the array.