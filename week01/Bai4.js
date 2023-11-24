// Coding Challenge #4
var billValue = 300;
var tip = 0;
if (billValue >= 50 && billValue <= 300) {
    tip = billValue * (15 / 100);
} else {
    tip = billValue * (20 / 100);
}


var toTal = billValue + tip;
console.log(`
    Bill Value: ${billValue}\n
    Tip Value: ${tip}\n
    Total: ${toTal}
`)