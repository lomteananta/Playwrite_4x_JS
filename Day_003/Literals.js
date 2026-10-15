// ============================================================
// Topic: null vs undefined in JavaScript
// ============================================================

/*
  SIMPLE DEFINITIONS:

  undefined  ->  A variable exists, but it has not been assigned any value yet.
                 JavaScript itself sets this automatically.

  null       ->  A variable exists, but the developer explicitly assigns 
                "no value" or "empty".
                 It is intentional absence of any value.
*/

// 1. Undefined

let uname;
console.log("object of uname is : " +uname);
console.log("type of uname is : "+ typeof uname);

function greet() {}
console.log(greet()); // undefined

// if assigned later and that variable is called after that
let a;
a = 10;
console.log(a); // 10

// 2. Null

let profilePic = null;
console.log("value of profile Pic is : " + profilePic); // null
console.log("type of profile Pic is : " + typeof  profilePic); // object

console.log("............"); 
/* 
let name = "ananta";
let name = "lomte";
*/
console.log(name); // SyntaxError: Identifier 'name' has already been declared
