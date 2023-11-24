// Coding Challenge #6
// Function
function calcTip(bill){
 return bill >=50 && bill<=300 ? bill * 0.15 : bill * 0.2
}
var tip = calcTip(100);
console.log(`The tip for a bill of 100 is: ${tip}`);

// Array bills
var bills =[125,555,44];
const tips = bills.map((bill) => calcTip(bill));
console.log("Tips for the bills:", tips);
//Total
var totals = bills.map((bill, index) => bill + tips[index]);
console.log("Total values for the bills:", totals);