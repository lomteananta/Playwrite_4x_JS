// Array literal (preferred)

let browsers = ["Chrome", "Firefox", "Safari"];

// Array constructor

let scores = new Array(3);        // creates [empty x 3]

let scores2 = new Array(1, 2, 3); // creates [1, 2, 3]

let numbers = new Array(100, 200, 300, 400); // 0-3: 4 items

console.log(numbers);

// Array.of() always builds from the given values

let test = Array.of(10, 20, 30, 40, 50); // 0-4: 5 items

console.log(test);
console.log("Length of Definded Array is :",test.length);  // OT 5 // arr.length is the number of items (length is a property, not a function, so no ())


console.log(test[0]);    // 10
console.log(test[6]);

// Array.from() builds an array from something iterable

let chars = Array.from("hello"); // ["h", "e", "l", "l", "o"]
