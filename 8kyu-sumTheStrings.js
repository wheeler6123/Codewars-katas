/*Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"
Notes:

If either input is an empty string, consider it as zero.

Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)*/



//P: input will be 2 strings, each consisting of an integer that may be positive or negative. strings can also be empty
//R: return a string representing the sum of the two input strings, treat empty strings as 0
//E: '4', '5' => '9'
  // '34', '5' => '39'
//P: function (a,b){
   // convert each string to a number
   // add numbers together
   // convert result back into string and return
//}

function sumStr(a,b){
    let sum = Number(a) + Number(b);
    return sum.toString()
  }