// https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript

// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase = function () {
    // Split the string into an array of words
    return this.split(' ')
      // Map over each word and capitalize the first letter, then join them back into a string
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  
  // Example usage:
  const quote = "How can mirrors be real if our eyes aren't real";
  console.log(quote.toJadenCase()); 

// no arrow functi0n
// String.prototype.toJadenCase = function() {
//     return this.split(' ')
//                .map(function(word) {
//                  return word.charAt(0).toUpperCase() + word.slice(1);
//                })
//                .join(' ');
//   };
  
//   const quote = "how can mirrors be real if our eyes aren't real";
//   console.log(quote.toJadenCase());

// .prototype explained: 

// The .prototype is a property available to all JavaScript functions and is used to add properties and methods to objects created by those functions. When you define a function in JavaScript, it automatically gets a prototype property, which is an object. Any properties or methods you attach to this prototype will be available to all instances created by that function when used as a constructor.

// Here’s a breakdown of how .prototype works:

// Constructors and Prototypes:
// When a function is used as a constructor (with the new keyword), the new object it creates will inherit properties and methods from the constructor’s prototype.


// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayHello = function() {
//   console.log(`Hello, my name is ${this.name}`);
// };

// const alice = new Person('Alice');
// alice.sayHello(); // Output: Hello, my name is Alice
// In this example, Person is a constructor function. The sayHello method is added to Person.prototype, so any object created with new Person will have access to sayHello.

// Extending Built-in Prototypes:
// JavaScript’s built-in objects (like String, Array, Object, etc.) also have prototypes. You can extend these prototypes to add new methods or properties.


// String.prototype.toJadenCase = function() {
//   return this.split(' ')
//              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//              .join(' ');
// };

// const quote = "how can mirrors be real if our eyes aren't real";
// console.log(quote.toJadenCase()); // Output: How Can Mirrors Be Real If Our Eyes Aren't Real
// In this example, we add the toJadenCase method to String.prototype. This means all string instances will have access to this method.

// Prototype Chain:
// When you access a property or method on an object, JavaScript will look for that property or method on the object itself. If it doesn’t find it there, it will look up the prototype chain. This chain continues until it reaches the top level, usually Object.prototype.


// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.speak = function() {
//   console.log(`${this.name} makes a noise`);
// };

// const dog = new Animal('Dog');
// dog.speak(); // Output: Dog makes a noise

// console.log(dog.toString()); // Output: [object Object]
// In this example, dog is an instance of Animal. It has access to the speak method defined on Animal.prototype. Additionally, since dog is also an object, it has access to methods defined on Object.prototype, like toString.

// Key Points:
// .prototype is used to define properties and methods that should be available on all instances created by a constructor function.
// Extending built-in prototypes allows you to add custom methods to native JavaScript objects.
// JavaScript looks up the prototype chain to find properties and methods not found directly on an object.