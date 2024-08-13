// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

function humanReadable(seconds) {
    // Check if the input is within the valid range (0 to 359999 seconds).
    // If it's not, return 'Invalid input'.
    if (seconds < 0 || seconds > 359999) {
      return 'Invalid input';
    }
  
    // Calculate the number of hours by dividing the total seconds by 3600 (the number of seconds in an hour).
    const hours = Math.floor(seconds / 3600);
  
    // Calculate the number of minutes by taking the remainder of the total seconds after hours are subtracted
    // and dividing that by 60 (the number of seconds in a minute).
    const minutes = Math.floor((seconds % 3600) / 60);
  
    // Calculate the remaining seconds after subtracting the hours and minutes.
    const secs = seconds % 60;
  
    // Define a helper function to pad a number with a leading zero if it's less than 10,
    // ensuring that each time unit is two digits long.
    const pad = (num) => num.toString().padStart(2, '0');
  
    // Return the formatted time in HH:MM:SS format using template literals.
    return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
  }
  