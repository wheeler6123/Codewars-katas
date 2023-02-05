/* 
Your Job
Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples
Examples
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"
*/



//P: two inputs, both should be natural positive integers
//R: return an integer for the sum of all multiples of n below m
//E: 2,9 => 20 (2+4+6+8)
  // 3,13 => 30 (3+6+9+12)
  // 4,-7 => 'INVALID'
//P: first, check to make sure both n and m are at least equal to 1, if not, return 'INVALID'
  // then, use a for loop to add the multiples up to m, which is non-inclusive
  // return the sum of the multiples


  function sumMul(n,m){
    if(n < 1 || m < 1){
      return 'INVALID'
    }
    
    let multis = [];
    
    for(let i = n; i < m; i++){
      if (i%n === 0){
        multis.push(i)
      }
    }
    
    return multis.reduce((a,c) => a + c, 0)
  }