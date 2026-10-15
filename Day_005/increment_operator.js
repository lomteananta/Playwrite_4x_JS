// 1. example
let a = 100;

console.log(a++ + ++a + a++)// + ++a);
// var 100 & a 101
// var (101 + 1) 102 & a 202
// var (202 + 100) & a 302
// 
// 100 + 202 + 304 + 106

console.log(a);

// 2. example
let aa = 37;

console.log(--aa + aa--);

console.log(aa);

// 3. example
let ab = 5; 
let ba = ab-- - --ab; 
console.log(ba, ab);

// 4. example
let i = 1; 

let r = i++ > 1 ? i++ : ++i; 
console.log(r, i);