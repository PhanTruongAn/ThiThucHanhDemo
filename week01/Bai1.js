// Coding Challenge #1
// 1. Store Mark's and John's mass and height in variables
var markMass = 78;
var markHeight = 1.69;

var johnMass = 92;
var johnHeight = 1.95;

// 2. Calculate both their BMIs using the formula
var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);

// 3. Create a Boolean variable 'markHigherBMI'
var markHigherBMI = markBMI > johnBMI;

// Output the results
console.log("Mark's BMI: " + markBMI);
console.log("John's BMI: " + johnBMI);

if (markHigherBMI) {
    console.log("Mark has a higher BMI than John.");
} else {
    console.log("John has a higher or equal BMI compared to Mark.");
}