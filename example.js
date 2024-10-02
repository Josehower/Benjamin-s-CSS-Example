console.log('⚠️ Check example.js to see this code'); // string
console.log(typeof 'Hello, Benjamin!'); // string
console.log('Hello, Benjamin!'); // Hello, Benjamin!
console.log(typeof (1 + 2)); // number
console.log(1 + 2); // 3
console.log(typeof true); // boolean
console.log(true); // true
console.log('//----- Conditional Operators//');
console.log("'jose' !== 'Jose'", 'jose' !== 'Jose'); // true
console.log('//----- Logical Operators//');
console.log("'jose' !== 'Jose' && 1 === 1", 'jose' !== 'Jose' && 1 === 1); // true
console.log("'jose' !== 'Jose' && 1 === 2", 'jose' !== 'Jose' && 1 === 2); // false
console.log("'jose' !== 'Jose' || 1 === 2", 'jose' !== 'Jose' || 1 === 2); // true
console.log("'jose' !== 'Jose' || 1 === 1", 'jose' !== 'Jose' || 1 === 1); // true
console.log("'jose' !== 'jose' || 1 === 2", 'jose' !== 'jose' || 1 === 2); // false

// Primitives
// String
// Number
// Boolean
// others...

// Conditional Operators
// === (strict equality)
// !== (strict inequality)
// > (greater than)
// >= (greater than or equal to)
// < (less than)

// Logical Operators
// && (and)
// || (or)

// Math Operators
// + (addition)
// - (subtraction)
// * (multiplication)
// / (division)

// Variables
// const ✅, let 🆗, var 🤮
// const is a constant variable
const username = 'Benjamin';
// let is a mutable variable
let age = 12;

age = age + 5;

console.log('username age after update', age); // 17
