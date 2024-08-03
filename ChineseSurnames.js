// https://www.codewars.com/kata/57a9692dbb9944516d000209/train/javascript

// Steps: 
// Split the string into surnames: This includes recognizing special two-character surnames.
// Reverse the order of surnames: Handle the order of surnames correctly, especially with the two-character surnames.
// Format the reversed string: Add a Chinese comma "，" after every 4 Chinese characters and a Chinese period "。" after every 8 Chinese characters.
// Handle multiple lines if necessary: Split the output into multiple lines if the length is more than 8 characters.

function extractSurnames(surnames) {
    const surnameList = []; // Initialize an empty array to hold the extracted surnames.
    let i = 0; // Initialize an index to traverse the input string.
    
    while (i < surnames.length) { // Loop through the input string.
        let found = false; // Flag to check if a special surname is found.
        
        for (const specialSurname of special) { // Iterate through each special surname in the `special` array.
            if (surnames.substr(i, specialSurname.length) === specialSurname) { // Check if the substring matches a special surname.
                surnameList.push(specialSurname); // If it matches, add the special surname to `surnameList`.
                i += specialSurname.length; // Move the index forward by the length of the special surname.
                found = true; // Set the found flag to true.
                break; // Break the loop as we found a match.
            }
        }
        
        if (!found) { // If no special surname was found,
            surnameList.push(surnames[i]); // Add the single character to `surnameList`.
            i++; // Move the index forward by one character.
        }
    }
    
    return surnameList; // Return the list of extracted surnames.
}


function formatSurnames(surnamesList) {
    let result = ''; // Initialize an empty string to hold the final formatted result.
    let currentLine = ''; // Initialize a string to build the current line of surnames.
    let charCount = 0; // Initialize a counter to keep track of the number of characters in the current line.
    
    for (let i = 0; i < surnamesList.length; i++) { // Loop through each surname in `surnamesList`.
        currentLine += surnamesList[i]; // Add the current surname to `currentLine`.
        charCount += surnamesList[i].length; // Add the length of the current surname to `charCount`.

        if (charCount === 4 || charCount === 8) { // Check if the `charCount` is 4 or 8.
            currentLine += charCount === 4 ? '，' : '。'; // Add a Chinese comma after 4 characters and a Chinese period after 8 characters.
            
            if (charCount === 8) { // If `charCount` is 8,
                result += currentLine + '\n'; // Add the `currentLine` to `result` and append a newline.
                currentLine = ''; // Reset `currentLine` for the next line.
                charCount = 0; // Reset `charCount` for the next line.
            }
        }
    }

    if (currentLine) { // If there are remaining characters in `currentLine`,
        if (charCount <= 4) { // If `charCount` is 4 or less,
            currentLine += '，'; // Add a Chinese comma.
        } else {
            currentLine += '。'; // Add a Chinese period.
        }
        result += currentLine; // Add the remaining `currentLine` to `result`.
    }

    return result.trim(); // Return the final result, trimming any trailing whitespace.
}


function reverseSurname(surnames) {
    const surnamesList = extractSurnames(surnames); // Extract surnames from the input string.
    const reversedSurnamesList = surnamesList.reverse(); // Reverse the order of the extracted surnames.
    return formatSurnames(reversedSurnamesList); // Format the reversed list of surnames and return the result.
}