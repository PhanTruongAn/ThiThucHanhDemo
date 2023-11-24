//Coding Challenge #3
var Dolphins = [97, 112, 101];
var Koalas = [109, 95, 123];

//1. Calculate the average score for each team
function avgScore(array) {
    var sum = 0
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    avg = sum / (array.length)
    return avg;
}
const dolphinsAverage = avgScore(Dolphins);
const koalasAverage = avgScore(Koalas);

console.log(`Dolphins average score: ${dolphinsAverage}\n`);
console.log(`Koalas average score: ${koalasAverage}\n`);
// 2. Compare the team's average scores to determine the winner of the competition
if (dolphinsAverage > koalasAverage) {
    console.log("\nDolphins team is the winner of the competition!");
} else if (dolphinsAverage < koalasAverage) {
    console.log("\nKoalas team is the winner of the competition!");
} else {
    console.log("\nTwo team draw!!!!!!!!");
}
//3.Bonus rules
if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log("Dolphins wins the trophy!");
  } else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
    console.log("Koalas win the trophy!");
  } else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
    console.log("It's a draw!");
  } else {
    console.log("No team wins the trophy.");
  }