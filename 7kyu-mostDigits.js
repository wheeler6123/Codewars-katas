/*
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/


//P: one input, an array containing integers
//R: return the number with the most digits, if two numbers in the array have the same number of digits, return the first one
//E: [1, 10, 100] => 100
  // [9000, 8, 800] => 9000
  // [8, 900, 500] => 900
//P: iterate over array converting each num to string and check it's length, if current length is greater than existing max length, replace max length with current and most digits with the num
  // return the num at the end with the most digits


  function findLongest(array){
    let currentMaxLength = 0;
    let currentMostDigits;
    
    for(let i = 0; i < array.length; i++){
      let num = array[i].toString();
      if(num.length > currentMaxLength){
        currentMaxLength = num.length;
        currentMostDigits = array[i];
      }
    }
    return currentMostDigits;
  }