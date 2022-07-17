/*In this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.

Floats with decimal part non equal to zero are considered UNeven for this kata.

*/



//P: input will be a number can pos/neg int/float etc
//R: return boolean for if the input number is even, return uneven for floats with decimal not equal to 0
//E: 0 => true
  // 0.5 => false
  // 1 => false
//P: function(n){
 // check if input mod 2 === 0, return boolean value
//}

const testEven = n => n%2 === 0