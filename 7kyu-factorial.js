/*In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

More details about factorial can be found here.*/


//P: one input, a non-negative integer
//R: return an integer representing the factorial for the input integer, so long as it is between 0 and 12. If less than 0 or greater than 12, throw a RangeError
//E: 0 => 1
  // 1 => 1
  // 2 => 2
  // 3 => 6
//P: declare var to hold factorial
  // check input for valid entry between 0 and 12
  // if invalid, throw RangeError
  // if valid, use decrementing loop to calculate factorial
  // return factorial var holding result


  function factorial(n){
    let factorial = 1;
    if(n < 0){
      throw new RangeError('Please enter a valid input 0-12');
    }else if(n >= 0 && n <= 12){
      for(let i = n; i > 0; i--){
        factorial *= i;
      }
    }else{
        throw new RangeError('Please enter a valid input 0-12')
      }return factorial;
  }