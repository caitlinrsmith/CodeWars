// https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript

function sumIntervals(intervals) {
    // If there are no intervals provided, return 0 as there's nothing to sum
    if (!intervals.length) return 0;
  
    // Sort the intervals by their starting point to make it easier to detect overlaps
    intervals.sort((a, b) => a[0] - b[0]);
  
    // Initialize the first interval's start and end points
    let [currentStart, currentEnd] = intervals[0];
    // Initialize the total length of the non-overlapping intervals
    let totalLength = 0;
  
    // Iterate through the remaining intervals, starting from the second one
    for (let i = 1; i < intervals.length; i++) {
      // Extract the start and end points of the next interval
      const [nextStart, nextEnd] = intervals[i];
  
      // Check if the current interval overlaps with the next one
      if (nextStart <= currentEnd) {
        // If they overlap, extend the current interval to cover the next interval
        // This is done by updating the end point to the furthest end point of the two intervals
        currentEnd = Math.max(currentEnd, nextEnd);
      } else {
        // If they don't overlap, add the length of the current interval to the total length
        totalLength += currentEnd - currentStart;
        // Move to the next interval by updating the current start and end points
        [currentStart, currentEnd] = intervals[i];
      }
    }
  
    // After the loop, add the length of the last interval to the total length
    totalLength += currentEnd - currentStart;
  
    // Return the total length of all non-overlapping intervals
    return totalLength;
  }  