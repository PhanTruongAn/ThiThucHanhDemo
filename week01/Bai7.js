//Coding Challenge #7
// Create objects for Mark and John
var mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
  
    // Create a method to calculate BMI
    calcBMI: function () {
      this.bmi = this.mass / (this.height ** 2);
      return this.bmi;
    },
  };
  
  var john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
  
    // Create a method to calculate BMI
    calcBMI: function () {
      this.bmi = this.mass / (this.height ** 2);
      return this.bmi;
    },
  };
  
  // Calculate BMIs
  mark.calcBMI();
  john.calcBMI();
  
  // Compare BMIs and log the result
  if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
  } else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
  } else {
    console.log("Mark and John have the same BMI.");
  }
  
