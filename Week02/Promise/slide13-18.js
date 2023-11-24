// How to create Promise()
var f = function(resolve, reject){
    // resolve();
    // reject();
}
var promise = new Promise(f);
promise.then()
promise.catch()
promise.finally();

promise
    .then(
        function(){
            console.log('Successfully');
        }
    )
    .catch(
          function(){
            console.log('UnSuccessfully');
          }
    )
    .finally(
        function(){
            console.log('Finally');
        }
    );

