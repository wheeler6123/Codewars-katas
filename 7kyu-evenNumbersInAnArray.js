/*Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
*/


//P: two inputs, one an array of integers and the second a lone integer (x). the array may contain even and odd integers, negative and positive. there will be at least x even integers in the array
//R: return the last x even integers in the original array, in the original input order
//E: [1,2,3,4,5,6,7,8,9], 3 => [4,6,8]
//P: filter the input array to leave only the even number elements
  // return the filter array sliced to the last x number of elements

  const evenNumbers = (arr,x) => arr.filter(num=>num%2===0).slice(-x)