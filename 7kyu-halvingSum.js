/*
Given a positive integer n, calculate the following sum:

n + n/2 + n/4 + n/8 + ...
All elements of the sum are the results of integer division.

Example
25  =>  25 + 12 + 6 + 3 + 1 = 47
*/


//P: one input, a positive integer
//R: return an integer representing the sum of the given integers fractional components, dividing in half each iteration
//E: 25 => 47 (25+12+6+3+1)
//P: use a while loop to continue halving the division until the product is 1
  // on each iteration, add the product to an accumulating var
  // return sum var 


  function halvingSum(n) {
    let sum = n;
    let product = n;
    let divisor = 2;
    
    while(product > 1){
      product = Math.floor(n/divisor);
      sum += product;
      divisor*=2;
    }
    
    return sum;
  }