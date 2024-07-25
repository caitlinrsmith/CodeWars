function array(string) {
    // Split the input string by commas
      let parts = string.split(',');
  
      // Check if the length of parts is less than or equal to 2
      if (parts.length <= 2) {
          return null;
      }
  
      // Get the sublist excluding the first and last elements
      let middleParts = parts.slice(1, -1);
  
      // Join the remaining elements with a space and return the result
      return middleParts.join(' ');
  }