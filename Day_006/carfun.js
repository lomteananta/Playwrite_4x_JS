// Creating an object
const car = {
  make: "Tesla",   model: "Model 3",   year: 2024,   colors: ["Red", "White", "Black"],
  // A method (function inside an object)
  start: function() 
  {
    return `The ${this.make} is starting...`;
  }
};

// Accessing properties
console.log(car.make);        // Output: Tesla (Dot notation)
console.log(car["model"]);    // Output: Model 3 (Bracket notation)
console.log(car.start());   