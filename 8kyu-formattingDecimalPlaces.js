/* 
Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

Example:    
5.5589 is rounded 5.56   
3.3424 is rounded 3.34
*/



//P: one input, a valid number with a string of decimal digits
//R: return the input rounded to 2 decimals
//E: 5.5589 => 5.56
  // 3.3424 => 3.34
//P: return the number trimmed to a fixed number of 2 digits, being sure to account for toFixed returning a string


const twoDecimalPlaces = num => +num.toFixed(2)