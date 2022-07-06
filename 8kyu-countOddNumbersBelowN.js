/*Given a number n, return the number of positive odd numbers below n, EASY!

Examples (Input -> Output)
7  -> 3 (because odd numbers below 7 are [1, 3, 5])
15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
Expect large Inputs!*/


//P: input will be a positive integer n
//R: return the number of positive odd numbers below n
//E: 7 => 3 (1, 3, 5)
  // 15 => 7 (1,3,5,7,9,11,13)
//P: function(n){
     // since odd numbers will be half of all numbers up to n, return n/2 rounded down to nearest whole integer
//}

const oddCount = n => Math.floor(n/2)