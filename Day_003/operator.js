/*
Operator in JS

1. arithemetric operator
2. assignment operator
3. relation operator 
4. comparison operator
5. logical operator

1. arithmetic operator
addition, sub, multi, exponetiation (**) div, modulus (%), Increamtn (++ post and pre), decrement (-- post and pre)

2. assigmnment operator
=. +=. -+ (x+=y is same as x= x+y), *=, /+, %=

3. compariosn operator 
? ternary operation checking condition is condition pass ext first set otherweise second set 

4. relation operator
are always return a boolean value (true / false)

5. Logical operator 
&& ---> if both condition true then return TRUE 
|| ---> even if one condition true return TRUE
!  ---> reverse the previous boolean value 

*/

// SYNTAX IS (condition) ? expression1 : expression2

let x = 10;
let y = 20

console.log(x < y ? x : y);

let age = 20;
let status = age >= 18 ? "Adult" : "Minor";

console.log(status);

// same using if else statement 

let age_1 = 17;
let status_1;

if (age_1 >= 18) {
    status_1 = "Adult";
} else {
    status_1 = "Minor";
}

console.log(status_1);

let price = 10;
let isMember = true;
let discount = isMember ? 0.2 : 0;
let total = 10 - (price * discount)
console.log("Final Price after applying discount :",total);

