//Coding Challenge #5
// Function to calculate the average of 3 scores
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Calculate the average score for both teams
const avgDolphins = calcAverage(85, 90, 89);
const avgKoalas = calcAverage(88, 91, 110);

// Function to check the winner and log the result
const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins");
  }
};

// Determine the winner for both sets of data
checkWinner(avgDolphins, avgKoalas);
