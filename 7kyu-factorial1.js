/*
Your task is to write function factorial
*/

//P: one input, an integer
//R: return the factorial of the input integeger
//E: 0 => 1
  // 1 => 1
  // 4 => 24
  //7 => 5040
//P: check input, if less than 2 return 1
  // otherwise, run the function starting with n x n-1 until n === 1
  // return result

  function factorial(n){
    let result = 1;
    if(n<2)return result;  
    for(let i = n; i>0; i--){
      result *= i;
    }
    return result;
  }