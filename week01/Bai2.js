// Coding Challenge #2

function BMICalculate(mass, height) {
    return mass / (height ** 2)
}

markMass = 78;
markHeight = 1.69;
johnMass = 95;
johnHeight = 1.95;


var markBMI = BMICalculate(markMass, markHeight);
var johnBMI = BMICalculate(johnMass, johnHeight)

//1 
if (markBMI > johnBMI) {
    console.log("Mark's BMI is higher than John's BMI\n");
} else {
    console.log("John's BMI is higher than Mark's BMI\n");
}
//2 Output BMI value with template
if (markBMI > johnBMI) {
    console.log(`Mark's BMI(${markBMI}) is higher than John's BMI(${johnBMI})`);
} else {
    console.log(`John's BMI(${johnBMI}) is higher than Mark's BMI(${markBMI})`);
}