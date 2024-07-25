function bmi(weight, height) {
    let bmiValue = weight / (height ** 2);
      
      if (bmiValue <= 18.5) {
          return "Underweight";
      } else if (bmiValue <= 25.0) {
          return "Normal";
      } else if (bmiValue <= 30.0) {
          return "Overweight";
      } else {
          return "Obese";
      }
  }

//   using Math.pow

//   function bmi(weight, height) {
//     let bmiValue = weight / Math.pow(height, 2);
    
//     if (bmiValue <= 18.5) {
//         return "Underweight";
//     } else if (bmiValue <= 25.0) {
//         return "Normal";
//     } else if (bmiValue <= 30.0) {
//         return "Overweight";
//     } else {
//         return "Obese";
//     }
// }

// function bmi(weight, height) {
  
//     var bmi  = weight/(height*height);
    
//      return bmi < 18.5 ? "Underweight" : bmi <=25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";
    
//     }

// https://www.codewars.com/kata/57a429e253ba3381850000fb/solutions/javascript
