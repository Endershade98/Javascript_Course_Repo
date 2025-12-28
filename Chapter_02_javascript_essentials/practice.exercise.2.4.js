/*
Create variables for three numbers: a, b, and c. Update these variables with the 
following actions using the assignment operators:
• Add b to a
• Divide a by c
• Replace the value of c with the modulus of c and b
• Print all three numbers to the console
*/

let a=2;
let b=4;
let c=5;

let add_b_to_a=b+a;
console.log("Add b to a:", add_b_to_a)
let divide_a_by_c=a/c;
console.log("Divide a by c:", divide_a_by_c)
console.log("c before module operation: ", c)
c=c%b;
console.log("New c module by b: ", c)