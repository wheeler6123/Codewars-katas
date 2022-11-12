/*
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.

*/

//P: one input, a number comprised solely of integer values
//R: return an int for the sum of the absolute values of the integers in the number
//E: 10 => 1
  // 99 => 18
  // -32 => 5
//P: first need to convert the input num to a string, then split it into individual nums and filter so that only actual nums will be in the array
  // iterate over the individual num array and sum the numbers
  // return the sum

function sumDigits(number) {
  let digits = number.toString().split('').filter(char => Number(char))
  return digits.reduce((a,c) => a + Number(c), 0)
}