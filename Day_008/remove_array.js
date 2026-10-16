// Create a New Array (Non-Mutating)

// The cleanest and most common approach is using the filter() method. It creates a new array containing only the elements that match your condition, effectively leaving the original array intact.

console.log("Removing Array Element using Non-Mutating Method");
const Old = ['apple', 'banana', 'orange', 'banana'];
console.log("Original Array Element :",Old);

const targetValue = 'banana';

// Keeps every item that is NOT the target value
const filteredFruits = Old.filter(item => item !== targetValue);
console.log("After Removing array element :",filteredFruits); // Output: ['apple', 'orange']

console.log("-----------------");

const fruits = ['apple', 'banana', 'orange'];
const targetValue_1 = 'banana';

// Find the index of the value
const index = fruits.indexOf(targetValue_1);
console.log(`${targetValue_1}'s Index is:`,index);