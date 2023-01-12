/* 
Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).
*/




//P: one input, an array containing integers
//R: return the sum of the differences between consectuvie pairs in the array sorted in descending order
//E: [2,1,10] => 9 ((10-2) + (2-1)) => 8 + 1 => 9
//P: first need to sort the array in descending order
  // then, reduce the array by subtracting the next element from the current element, and add that result to an accumulator
  // return the sum

  function sumOfDifferences(arr) {
    if(arr.length < 2){return 0}
    let sorted = arr.sort((a,b) => b-a)
    let sum = 0;
    for(let i = 0; i<sorted.length-1; i++){
      sum+=(sorted[i] - sorted[i+1])
    }
    return sum
  }