/*
Create a variable for your name, another one for your age, and another one for 
whether you can code JavaScript or not.
Log to the console the following sentence, where name, age and true/false are 
variables: 
Hello, my name is Maaike, I am 29 years old and I can code JavaScript: 
true.
*/

const myName="Nunzio";
const myAge=27;
const canCode=true;

let str1 ="Hello, my name is ";
let str2="I am ";
let str3=" years old and I can code Javascript: ";

console.log(str1+myName+", "+str2+myAge+str3+canCode);

/*
Write some code to calculate the hypotenuse of a triangle using the Pythagorean 
theorem when given the values of the other two sides. The theorem specifies that the 
relation between the sides of a right-angled triangle is a² + b² = c²
*/

let a=prompt("Insert a triangle side: ")
let b=prompt("Insert b triangle side: ")

console.log("c² =",a**2+b**2)
console.log("c =",(a**2+b**2)**0.5)

