function makeCounter(initialValue, step) {
    
    let count = initialValue || 0;
   
    makeCounter.prototype.increment = function () {
        count += (step || 1);
    };
    makeCounter.prototype.reset = function () {
        count = 0;
    };
    makeCounter.prototype.getValue = function () {
        return count
    };
}
     
    let counter = new makeCounter(5, 2);

    counter.increment();
    counter.increment();
    counter.increment();
    console.log( counter.getValue() );
    counter.reset();
    console.log( counter.getValue() );



    // function saveSum() {
//     let sum = 0;
  
//     return function(a) {
//       return sum += a; 
//     };
//   }
  
//   let adder = saveSum();
  
//   console.log( adder(2) ); 
//   console.log( adder(5) ); 
//   console.log( adder(11) ); 

  
 
  