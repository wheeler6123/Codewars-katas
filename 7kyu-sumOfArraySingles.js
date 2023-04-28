/*
In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

More examples in the test cases.

Good luck!
*/


//P: one input, an array of integers
//R: return the sum of only the integers in the input array that occur just once
//E: [4,5,7,5,4,8] => 15 (7+8)
//P: filter the array to return the two integers that only occur once, then return the sum of those 2 ints


function repeats(arr){
    return arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el)).reduce((a,b)=> a+b);
  };