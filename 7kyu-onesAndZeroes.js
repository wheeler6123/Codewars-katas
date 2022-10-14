/*Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.*/



//P: one input, an array containing a list of 0s and 1s
//R: return the joined input array (binary representation) as a base 10 integer
//E: [0,0,0,1] => 1
  // [0,0,1,0] => 2
//P: take the input array and join it to get the input binary number
  // convert binary to base 10 with parseInt
  // return integer


  const binaryArrayToNumber = arr => {
    let binary = arr.join('');
    let base10 = parseInt(binary, 2);
    return base10;
  };