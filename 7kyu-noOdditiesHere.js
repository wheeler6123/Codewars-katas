/*Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.*/


//P: one input, an array that will contain only integers
//R: return an array containing only the even numbers in the array, in the order they were given
//E: [0,1] => [0]
  // [0,1,2,3] => [0,2]
//P: use filter method to add the els that are even by mod 2
 
const noOdds = arr => arr.filter(el => el % 2 === 0)