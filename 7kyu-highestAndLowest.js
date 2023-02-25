/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
FUNDAMENTALSSTRINGS
*/


//P: one input, a string consisting of at least one integer, integers can be positive or negative
//R: return a string with the highest number in the input string a single space and then the lowest number in the input string
//E: '1 2 3 4 5' => '5 1'
  // '1 2 -3 4 5' => '5 -3'
  // '1 9 3 4 -5' => '9 -5'
//P: first, split the string into an array of integers contained within
  // sort the array of ints from high to low
  // return a string with the value of the highest and the value of the lowest in the array



  function highAndLow(numbers){
    let nums = numbers.split(' ');
    let sorted = nums.sort((a,b) => b-a);
    let high = sorted[0];
    let low = sorted[sorted.length-1];
    return `${high} ${low}`
  }