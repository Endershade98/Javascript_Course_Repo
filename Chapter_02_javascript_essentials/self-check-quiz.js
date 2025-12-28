
// Mostra tipi di variabili
let c = "Hello";
let d = 10;
console.log("Type of c:", typeof c);
console.log("Type of d:", typeof d);

// Template string
let e = "Hello";
console.log(`${e} World!`);

// Importa il modulo readline per input da terminale
const readline = require("readline");

// Crea interfaccia di input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Chiede all’utente un input e lo stampa
rl.question("Scrivi qualcosa (invece di prompt): ", (w) => {
  console.log("Hai scritto:", w);
  rl.close();
});

// What is the vlue of b output to the console?
let a_=5;
let b_=70;
let c_="5";

console.log("a_ before increment: ", a_);
console.log("a_ after increment (++a_): ", ++a_);
console.log("a_ after increment (a_++): ", a_++);

let firstNum=5;
let secondNum=10;
firstNum++;
secondNum--;
let total=++firstNum + secondNum;
console.log(total);

// What is logged to the console here?

const a = 5;
const b = 10;
console.log(a > 0 && b > 0); // true AND true --> true
console.log(a == 5 && b == 4);  // true AND false --> true (false)
console.log(true ||false); // true OR false --> true 
console.log(a == 3 || b == 10); // false OR true -->  true
console.log(a == 3 || b == 7); // false OR false --> false