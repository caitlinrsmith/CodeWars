// https://www.codewars.com/kata/55cbd4ba903825f7970000f5

// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade. A-F block of 10% each except F is 60 and below

function getGrade(s1, s2, s3) {
    // Calculate the average score
    const average = (s1 + s2 + s3) / 3;

    // Determine the letter grade based on the average score
    if (average >= 90) {
        return 'A';
    } else if (average >= 80) {
        return 'B';
    } else if (average >= 70) {
        return 'C';
    } else if (average >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}
