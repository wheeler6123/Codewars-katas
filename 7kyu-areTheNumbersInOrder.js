/* 
Are the numbers in order?
In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

For the purposes of this Kata, you may assume that all inputs are valid, i.e. arrays containing only integers.

Note that an array of 0 or 1 integer(s) is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value.

For example:

inAscOrder([1,2,4,7,19]); // returns true
inAscOrder([1,2,3,4,5]); // returns true
inAscOrder([1,6,10,18,2,4,20]); // returns false
inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order
N.B. If your solution passes all fixed tests but fails at the random tests, make sure you aren't mutating the input array.
*/



//P: one input, an array containing a set of integers
//R: return a boolean value for if the input array is in ascending order
//E: [1,2,3,5,7,8] => true
  // [2,4,6,8] => true
  // [1,6,7,10,2,5,22] => false
//P: simply map a new array from input, sort it, then check if every element is the same


function inAscOrder(arr){
    let sorted = arr.map(num => num).sort((a,b) => a-b)
    return arr.every((val, index) => val === sorted[index])
  }