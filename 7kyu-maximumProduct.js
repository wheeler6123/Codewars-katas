/*Task
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Notes
Array/list size is at least 2.

Array/list numbers could be a mixture of positives, negatives also zeroes .

Input >> Output Examples
adjacentElementsProduct([1, 2, 3]); ==> return 6
Explanation:
The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.
adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
Explanation:
Max product obtained from multiplying 5 * 10  =  50 .

adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14
Explanation:
The maximum product obtained from multiplying -2 * 7 = -14, and they're adjacent numbers in the array.*/


//P: one input, an array of integers
//R: return an integer representing the product of multiplying two adjacent integers that results in the maximum value
//E: [5,8] => 40
  // [4,12,3,1,5] => 48 (4x12 result in the largest product while being adjacent to each other)
//P: declare a var to hold the max value, leaving it undefined
  // loop through array multiplying each index by the one that comes after it, and checking against the current max value 
  // if the product is greater than the current max or if max is undefined, the new product becomes the max until the array has been iterated completely
  // return the max value

  function adjacentElementsProduct(array) {
    let max;
    for(let i = 0; i<array.length; i++){
      let product = array[i] * array[i+1];
      if(product > max || max === undefined){
        max = product;
      }
    }return max;
  }