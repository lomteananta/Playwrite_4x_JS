// defining using var variable 

console.log(x);
var x=5;
console.log(x);

// defining using let variable

console.log(y);
let y=10;
console.log(y);


// differences is 
//var and let are both used for variable decralation in JS
//2. The difference between var and let is that var is function-scoped, meaning we can declare a variable anywhere within a function. However, let is block-scoped, meaning the variable is accessible only within the block where it is declared.

// Once a variable is declared with let, we can use it in the lines of code below its declaration, but trying to access it before its declaration will throw an error.
 /*
 One important JavaScript correction

Your explanation is close, but there is one detail to remember:

    var is function-scoped and can be accessed before its declaration due to hoisting, although its value will be undefined.

    let is block-scoped and cannot be accessed before its declaration. Doing so throws a ReferenceError because of the temporal dead zone.

Example:
javascript

console.log(a); // undefined
var a = 10;

console.log(b); // ReferenceError
let b = 20;

Tip: In JavaScript, use declare when introducing a variable and access when referring to its value. This will make your technical explanations sound more precise.
 
 */