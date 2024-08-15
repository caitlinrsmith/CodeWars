// https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript

function inArray(array1, array2) {
    // Initialize an empty array to store the results
    let result = [];

    // Iterate through each string in array1
    for (let str1 of array1) {
        // For each string in array1, iterate through each string in array2
        for (let str2 of array2) {
            // Check if the current string from array1 (str1) is a substring of the current string from array2 (str2)
            if (str2.includes(str1)) {
                // If str1 is found in str2, add str1 to the result array
                result.push(str1);
                // Break out of the inner loop to avoid adding the same string multiple times
                break;
            }
        }
    }

    // Convert the result array to a Set to remove duplicates, then convert it back to an array and sort it lexicographically
    return Array.from(new Set(result)).sort();
}
