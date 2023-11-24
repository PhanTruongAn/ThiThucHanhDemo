var f = function (resolve, reject) {
    resolve();
  };
  
  var promise = new Promise(f);
  promise
    .then(function () {
      console.log("1!");
    })
    .then(function () {
      console.log("2!");
    })
    .then(function () {
      console.log("3!");
    });