// https://www.codewars.com/kata/57f625992f4d53c24200070e/javascript


// Time to win the lottery!

// Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

// Example ticket:

// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
// To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

// Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

// All inputs will be in the correct format. Strings on tickets are not always the same length.

function bingo(ticket, win) {
    // Initialize the count of mini-wins
    let miniWins = 0;
    
    // Loop through each subarray in the ticket
    for (let i = 0; i < ticket.length; i++) {
      const [string, number] = ticket[i]; // Destructure the subarray into string and number
      
      // Check if any character code in the string matches the number
      for (let char of string) {
        if (char.charCodeAt(0) === number) {
          miniWins++; // Increment mini-wins count
          break; // Only one mini-win per subarray, so break out of the loop
        }
      }
    }
    
    // Compare mini-wins count to the win threshold
    return miniWins >= win ? 'Winner!' : 'Loser!';
  }
  
  // Example usage
  console.log(lottery([ ['ABC', 65], ['HGR', 74], ['BYHT', 74] ], 2)); // Output: 'Loser!'
  console.log(lottery([ ['ABC', 65], ['HGR', 74], ['BYHT', 66] ], 2)); // Output: 'Winner!'
  