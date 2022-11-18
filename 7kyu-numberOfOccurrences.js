/*Write a function that returns the number of occurrences of an element in an array.

Examples
var arr = [0, 1, 2, 2, 3];
arr.numberOfOccurrences(0) === 1;
arr.numberOfOccurrences(4) === 0;
arr.numberOfOccurrences(2) === 2;
arr.numberOfOccurrences("a") === 0;*/



//P: one input, representing the value to count the instances for within an array
//R: return the number of instances in an array for the given value
//E: [4,0,4] 4 => 2
//P: declare a var to hold the counter results
  // use a for...of loop to iterate through each element in array, checking if it equals the target value
  // if yes, increment counter value
  // return counter value once array has been iterated over


  Array.prototype.numberOfOccurrences = function(x) {
    let counter = 0;
    for(const el of this){
      if(el === x){
        counter++;
      }
    }return counter
  }