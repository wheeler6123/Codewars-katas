/* 
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case


*/



//P: one input, a non-negative integer
//R: return the number of 1s in the binary representation of the input number
//E: 1234 => 5 (10011010010)
//P: convert input n to binary string
  // iterate over binary string, counting 1s
  // return number of 1s in binary string

  var countBits = function(n) {
    let ones = 0;
    let converted = n.toString(2)
    
    for(let i = 0; i<converted.length; i++){
      if(converted[i] === '1'){
        ones++
      }
    }
    
    return ones
  };