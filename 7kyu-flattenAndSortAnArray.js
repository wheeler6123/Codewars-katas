/*Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].*/


//P: one input, an array, that may or may not contain multiple arrays containing integers
//R: return one array, combining all of the integers in the various input arrays into one array sorted into ascending order
//E: [] => []
  // [[], [1]] => [1]
  // [[3,2,1], [7,9,8], [6,4,5]] => [1,2,3,4,5,6,7,8,9]
//P: use the flat method to reduce the subarrays into one, then sort and return


"use strict";

function flattenAndSort(array) {
  return array.flat().sort((a,b) => a-b)
}