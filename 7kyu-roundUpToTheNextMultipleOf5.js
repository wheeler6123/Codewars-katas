/* 
Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

Examples:

input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.
Input may be any positive or negative integer (including 0).

You can assume that all inputs are valid integers.
*/



//P: one input, an integer can be any positive/negative/0
//R: return the next (greater than or equal to) multiple of 5
//E: 0 => 0
  // 2 => 5
  // 21 => 25
  // -2 => 0
  // -5 => -5


  function roundToNext5(n){
    if(Math.abs(n) % 5 === 0){
      return n
    }else if(n > 0){
      return n + (5 - (n%5))
    }else{
      return n + Math.abs(n%5)
    }
  }