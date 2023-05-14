/*
Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

Examples
explode("312")
should return :

"333122"
explode("102269")
should return :

"12222666666999999999"
*/


//P: one input, a string of digits 0-9
//R: return a string where each digit is repeated a number of time equal to its value
//E: '312' => '333122'
  // '0' => ''
  // '123' => '122333'
//P: split the string and convert to an array of individual nums
  // remove any zeros, since they won't be added to final string
  // iterate through non-zero array, adding the num to a results string as many times as its value
  // return results string


  function explode(s) {
    let nums = s.split('').filter(num => num!==0);
    let result = '';
    
    for(let i = 0; i < nums.length; i++){
      let value = nums[i];
      for(let j = 1; j<=value; j++){
        result += `${value}`;
      }
    }
    
    return result;
  }