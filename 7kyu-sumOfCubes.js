/*
Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

Assume that the input n will always be a positive integer.

Examples: (Input --> output)

2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)
*/

//P: input will be one, a positive integer
//R: return the sum of all the cubed values from 1 to n (inclusive)
//E: 2 => 9
  // 3 => 36
//P: use a for loop to loop through 1 to n, cubing each and adding to an accumulator
  // return accumulated sum


  function sumCubes(n){
    let sum = 0;
    for(let i = 1; i<=n; i++){
      sum += (i*i*i);
    }
    return sum;
  }