// Miles-to-kilometers converter
/* Create a variable that contains a value in miles, convert it to kilometers, and log the 
value in kilometers in the following format: The distance of 130 kms is equal to 209.2142 miles
*/

var kilometers=130;

function converter(kilometers){
    return kilometers*1.60934
}

console.log("The distance of ", kilometers, "kms is equal to", converter(kilometers), "miles")


/* Set values for height in inches and weight in pounds, then convert the values to 
centimeters and kilos, outputting the results to the console:
- 1 inch is equal to 2.54 cm
- 2.2046 pounds is equal to 1 kilo
Output the results. Then, calculate and log the BMI: this is equal to weight (in kilos) 
divided by squared height (in meters). Output the results to the console
*/

let height_inches=1;
let weight_pounds=3;

// convert in centimeters and kilos
let height_centimeters=height_inches*2.54
let weight_kilos=weight_pounds/2.2046

// BMI calculate 
let bmi=weight_kilos/((height_centimeters*100)**0.5)
console.log("The BMI is: ",bmi)

// Self-check quiz
