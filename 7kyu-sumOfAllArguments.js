/*
Write a function that finds the sum of all its arguments.

eg:

sum(1, 2, 3) // => 6
sum(8, 2) // => 10
sum(1, 2, 3, 4, 5) // => 15
*/


//P: unknown number of input params, but all will be integers
//R: return the sum of all the inputs
//E: 1 => 1
  // 1, 3, 8, 30 => 42
//P: spread the arguments into an array, then reduce and return the array

function sum(...args){
    return args.reduce((a,b) => a+b)
  }