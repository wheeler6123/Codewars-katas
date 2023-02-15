/* 
Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: http://oj.leetcode.com/problems/two-sum/

twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
*/



//P: two inputs, first an array of integers and second a target value integer
//R: return an array, containing the indices of two integers in the input array that added together equal the target num
//E: [1,2,3], 4 => [0,2] or [2,0] (1+3 = 4)
//P: use a for-loop to iterate through array vals, adding two together at a time until the target value is met
  // return an array containing the indices of the 2 values that equal the target



function twoSum(numbers, target) {
  for(let i = 0; i < numbers.length; i++){
    for(let j = 1; j <= numbers.length; j++){
      if(numbers[i] + numbers[j] === target){
        return [i, j]
      }
    }
  }
}