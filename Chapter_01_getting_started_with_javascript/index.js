// alert, console and prompt usage

const { type } = require("node:os");

//alert("Hello, welcome to JavaScript!"); openend from browser

console.log("This message is logged to the console.");

//let userName = prompt("Please enter your name:"); from browser
//console.log("User's name is: " + userName);

// Variable declaration and data types

let age = 4;
let isStudent = true;
let firstName = "John";

console.log("Age:", age);
console.log("Type of age:", typeof age);

console.log("Is Student:", isStudent);
console.log("Type of isStudent:", typeof isStudent);

console.log("First Name:", firstName);
console.log("Type of firstName:", typeof firstName);

// How many types of data types are there in JavaScript?

const c= "5";
console.log("Type of c:",typeof c); // string

const d=3.14;
console.log("Type of d:",typeof d); // number

const e=false;
console.log("Type of e:",typeof e); // boolean

const f=null;
console.log("Type of f:",typeof f); // object

let g;
console.log("Type of g:",typeof g); // undefined

const h=Symbol("id");
console.log("Type of h:",typeof h); // symbol

const i=BigInt(12345678901234567890);
console.log("Type of i:",typeof i); // bigint

// There are 7 data types in JavaScript:
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt
// Note: Object is a complex data type and not a primitive data type.
// So, there are 7 primitive data types in JavaScript.


// End of Chapter 1 code