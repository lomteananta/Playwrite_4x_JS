// Adding and Removing Items These methods change (mutate) the array.

let arr = [1, 2, 3];
console.log("Before Doing ANy Action : ",arr);

// Add to the END

arr.push(4);      // [1, 2, 3, 4]

// Remove from the END

arr.pop();        // [1, 2, 3]

arr.push(5, 6);   // [1, 2, 3, 5, 6]

// Add to the BEGINNING

arr.unshift(0);   // [0, 1, 2, 3, 5, 6]

// Remove from the BEGINNING

arr.shift();      // [1, 2, 3, 5, 6]

// splice(start, deleteCount, ...itemsToAdd)

arr.splice(2, 1);        // removes 1 item at index 2

arr.splice(2, 0, 99);    // inserts 99 at index 2, removes nothing

arr.splice(5, 1, 7);    // replace 7 at index 5, 1 represernt how may time recursion 

console.log("After did Action : ",arr);