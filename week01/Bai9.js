//Coding Challenge #9
function printForecast(arr) {
    let forecastString = "";
    for (let i = 0; i < arr.length; i++) {
      forecastString += `... ${arr[i]}°C in ${i + 1} day${i === 0 ? "" : "s"} `;
    }
    console.log(forecastString);
  }
  
  // Test data 1
  var data1 = [17, 21, 23];
  printForecast(data1);
  
  // Test data 2
  var data2 = [12, 5, -5, 0, 4];
  printForecast(data2);
  