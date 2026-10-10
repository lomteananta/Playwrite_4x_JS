// --------------------------------------------------------
// 1. INTEGER LITERALS
// --------------------------------------------------------

// Decimal (Base 10) - most common
let decimal = 42;
console.log("Decimal:", decimal); 

// Binary (Base 2) - starts with 0b or 0B
let binary = 0b1010; // 10 in decimal
console.log("Binary 0b1010 but JS displayed in normal format:", binary); // 10

// Octal (Base 8) - starts with 0o or 0O
let octal = 0o52; // 42 in decimal
console.log("Octal 0o52 but JS displayed in normal formal:", octal); // 42

// Hexadecimal (Base 16) - starts with 0x or 0X
let hex = 0x2A; // 42 in decimal
console.log("Hexadecimal 0x2A: but JS displayed in normal formal", hex); // 42



// Ways of defining Bigint
console.log("way to defined Bigint");
let big = 123456789012345678901234567890n; // 'n' at the end of the number denotes its bigint
let big2 = BigInt("123456789012345678901234567890");
let bigFromNum = BigInt(42);

console.log("BigInt literal:", big);
console.log("BigInt from string:", big2);
console.log("BigInt from number:", bigFromNum);
console.log("typeof BigInt:", typeof big); 

console.log("Info relatde to infinity");
console.log(0.1 + 0.2);

// Infinity

console.log(Infinity); // Infinity
console.log(-Infinity); // -Infinity
console.log("1 / 0:", 1/0); // 1 / 0: Infinity
console.log("-1 / 0:", -1/0); // -1 / 0: -Infinity
console.log("Infinitys number type of : ",typeof Infinity); // number

// NaN (Not a Number) - result of invalid math

console.log("0 / 0:", 0/0); // 0 / 0: NaN
console.log('"a string" / 2:' , "a string" / 2);  // "a string" / 2: NaN
console.log('"a string" * 2:' , "a string" * 2);  // "a string" * 2: NaN
console.log("NaN is :", NaN);  // NaN is : NaN
console.log("Nan type is : ", typeof NaN);  // number