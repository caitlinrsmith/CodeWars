// https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/javascript

function topThreeWords(text) {
    // Convert the entire text to lowercase to ensure case-insensitive matching
    // and use a regular expression to match all valid words.
    // The regular expression looks for sequences of letters (a-z) that can
    // optionally contain one or more apostrophes (').
    // If no words are found, return an empty array.
    const words = text
        .toLowerCase()
        .match(/[a-z]+'?[a-z']*/g) || [];

    // Create an object to store the frequency count of each word.
    // The reduce function iterates over the words array and updates the count
    // for each word. If the word doesn't exist in the object, it initializes it
    // with a count of 0 and then increments it by 1.
    const wordCounts = words.reduce((counts, word) => {
        counts[word] = (counts[word] || 0) + 1;
        return counts;
    }, {}); // The empty object {} is used as the initial value for the counts accumulator.

    // Extract the keys (words) from the wordCounts object and sort them based
    // on their frequency in descending order. The sort function compares the 
    // counts of two words (a and b) and orders them accordingly.
    const sortedWords = Object.keys(wordCounts)
        .sort((a, b) => wordCounts[b] - wordCounts[a]);

    // Return the top 3 most frequent words. If there are fewer than 3 unique
    // words, slice will return whatever is available (top-2, top-1, or empty array).
    return sortedWords.slice(0, 3);
}
