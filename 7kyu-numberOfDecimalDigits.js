/*Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

All inputs will be valid.*/


//P: input will be an integer
//R: return an integer for the number of digits in the input
//E: 5 => 1
  // 12345 => 5
//P: convert int to string and return length


const digits = n => n.toString().length