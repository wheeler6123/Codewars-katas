/*Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example(Input1, Input2 --> Output)
[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]*/


//P: two params, numbers is an array of integers, divisor is an integer
//R: return a new array of all of the numbers in the given array that are divisable by the divisor
//E: [1,2,3,4,5,6], 2 => [2,4,6]
//P: function ([nums], d){
  //create a var to hold new array
  //run for each loop testing each num in array by divisor
  //if divisible, add that num to new array
  //return new array
//}

function divisibleBy (n,d){
    let divisible = n.filter(num => num % d === 0);
    return divisible; 
  }