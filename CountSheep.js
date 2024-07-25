// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/javascript

var countSheep = function (num) {
    // Initialize an empty string to hold the result
    var murmur = "";
  
    // Loop from 1 to the given number
    for (var i = 1; i <= num; i++) {
      // Append the current number followed by " sheep..." to the result string
      murmur += i + " sheep...";
    }
  
    // Return the final result string
    return murmur;
  };

// function CountSheep(NumSheep) {
//     let murmur = ""
//     for (let i = 1; i <= NumSheep; i++) {
//         murmur += `${i} sheep...`;
//     }
//     return murmur;
// }

// more solutions: https:
//www.codewars.com/kata/5b077ebdaf15be5c7f000077/solutions/javascript