/*This is the first step to understanding FizzBuzz.

Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

Your expected output is an array of positive integers from 1 to n (inclusive).

Your job is to write an algorithm that gets you from the input to the output.*/


//P: input is a positive integer n, greater than or equal to 1
//R: return an array of integers from 1 to n inclusive
//E: 1 => [1]
  // 3 => [1,2,3]
//P: declare a var to hold new array
  // use a for loop to push integers from 1 to n to new array
  // return new array

  function preFizz(n) {
    let bzzz = [];
    for (let i = 1; i <= n; i++){
      bzzz.push(i);
    }return bzzz;
  }