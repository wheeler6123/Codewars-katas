/*
Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

You may assume the input is always valid.

Examples
isPowerOfTwo(1024) // -> true
isPowerOfTwo(4096) // -> true
isPowerOfTwo(333)  // -> false
Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.
*/


//P: one input, a non-negative integer
//R: return a boolean value for whether or not the number is a power of two
//E: 1024 => true
  // 4096 => true
  // 333 => false
//P: will loop through dividing n by 2 and verifying n%2 === 0 unless n === 1 to check 


function isPowerOfTwo(n){
    if(n===1){return true}
    if(n%2!==0 || n===0){return false}
    
    while(n%2===0){
      n = n/2;
      if(n===1){return true}
    }
    return false
  }