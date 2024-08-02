// https://www.codewars.com/kata/5a023c426975981341000014/solutions/javascript

// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

function otherAngle(a, b) {
    // Calculate the third angle
    return 180 - (a + b);
  }

//   Explanation
// The sum of the three interior angles in a triangle is always 180 degrees.
// Finding the Third Angle: If you are given two angles, a and b, you can find the third angle by subtracting the sum of a and b from 180.