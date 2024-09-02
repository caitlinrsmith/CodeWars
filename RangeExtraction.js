/**
 * @param {number[]} list
 * @return {string}
 */
function solution(list) {
    let result = [];  // Initialize an empty array to store the formatted parts of the result
    let i = 0;  // Start index for iterating through the list

    // Loop through the list of integers
    while (i < list.length) {
        let start = i;  // Mark the beginning of a potential range
        // Continue to the next integer if it's consecutive
        while (i < list.length - 1 && list[i + 1] === list[i] + 1) {
            i++;  // Move to the next integer in the list
        }
        let end = i;  // Mark the end of the current range or sequence
        // Check if we have a range of at least 3 numbers
        if (end - start >= 2) {
            // Add the range in the format "start-end" to the result array
            result.push(`${list[start]}-${list[end]}`);
        } else {
            // If not a range, add individual numbers to the result array
            for (let j = start; j <= end; j++) {
                result.push(`${list[j]}`);
            }
        }
        i++;  // Move to the next integer in the list
    }

    // Join all parts of the result array into a single string separated by commas
    return result.join(",");
}
