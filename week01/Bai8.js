//Coding Challenge #8
// Create an array 'bills' containing all 10 test bill values
var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Create empty arrays for the tips and the totals
var tips = [];
var totals = [];

// Function to calculate the tip based on bill value
function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// Calculate tips and totals for each bill using a for loop
for (let i = 0; i < bills.length; i++) {
    var tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}

// Log the tips and totals arrays
console.log("Tips:", tips);
console.log("Totals:", totals);

// Bonus: Function to calculate the average of an array
function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

// Calculate and log the average of the 'totals' array
var averageTotal = calcAverage(totals);
console.log(`Average total value: ${averageTotal}`);
