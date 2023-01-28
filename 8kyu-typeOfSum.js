/* 
Return the type of the sum of the two arguments
*/



//P: two inputs, can be anything (integer, string, boolean value, null, undefined)
//R: return the type of the sum between the two inputs
//E: 12, 1 => number
  // 'd', 1 => string
  // 1, 'a' => string
  // null, 1 => number
  // null, undefined => number
//P: add the two inputs, then return the typeof the result



function typeOfSum(a, b) {
    return typeof (a+b)
  }