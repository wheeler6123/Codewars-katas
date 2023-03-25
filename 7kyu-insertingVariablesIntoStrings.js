/*
Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

Example:

solution(5) // should return "Value is 00005"
*/


//P: one input, an integer, representing a value
//R: return a string in the format of "Value is XXXXX", where XXXXX is a 5 digit padded number
//E: 5 => 'Value is 00005'
  // 1204 => 'Value is 01204'
  // 0 => 'Value is 00000'
//P: create a helper function that will take in a number, convert it to a string and pad it with 0s until it is 5 chars long
  // write the solution function to call the helper function to get a padded input val, then return a template literal inserting the padding num into string

  function padNum(num){
    let strNum = num.toString();
    while(strNum.length < 5){
      strNum = '0'+strNum;
    }
    return strNum;
  }
  
  function solution(value){
    let paddedVal = padNum(value);
    return `Value is ${paddedVal}`
  }