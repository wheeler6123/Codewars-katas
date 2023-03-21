/*
Write a program that outputs the top n elements from a list.

Example:

largest(2, [7,6,5,4,3,2,1])
// => [6,7]
*/


//P: two inputs, first an integer representing n, second an array of integers
//R: return an array containing the top n largest elements in the array
//E: 2, [7, 6, 4, 5, 2, 3, 1] => [6,7]
  // 2, [1,2,3,4,5,6,7,8,9] => [8,9]
//P: first, sort the array
  // return a slice of the array containing the top n elements 

  const largest = (n, arr) => n === 0 ? [] : arr.sort((a,b) => a-b).slice(-n);