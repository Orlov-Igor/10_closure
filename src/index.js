function saveSum() {
    let sum = 0;
  
        return function(a) {
        return sum += a; 
        };
    };
  
    let adder = saveSum();
  
console.log( adder(2) ); 
console.log( adder(5) ); 
console.log( adder(11) ); 



function createCounter(initialValue = 0, step = 1) {
    let count = initialValue;
         
        const fn = function() {
            return count += step;
        };
        
        fn.reset = function() {
            return count = initialValue;
        };
    return fn;
};
 
const counter = createCounter(2, 10);
const counter2 = createCounter();

console.log(counter());
console.log(counter());
console.log(counter.reset());
console.log(counter());
console.log(counter2());
console.log(counter2());
console.log(counter());


  