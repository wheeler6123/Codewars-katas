/*Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

Example:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"*/


//P: one input, will be positive integer > 1
//R: return an array of all divisors for the input, not including 1 or the number. If prime, return number is prime
//E: 12 => [2,3,4,6]
  // 25 => [5]
  // 13 => '13 is prime'
//P: declare a var to hold array of divisors
  // use a for loop to iterate through up to input and check for mod 0
  // push divisors to array
  // check array length, if 0 return num is prime, if 1 or more return array

  function divisors(integer) {
    let results = [];
    for(let i = 2; i < integer; i++){
      if(integer % i === 0){
        results.push(i);
      }
    }if (results.length > 0){
      return results;
    }else{
      return `${integer} is prime`
    }
  };