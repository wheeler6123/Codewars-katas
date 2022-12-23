/* 
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/


//P: one input, a positive integer
//R: return the number of times that you can mutiply the digits against each other until the result is single digit number
//E: 39 => 3 (3*9 = 27, 2*7 = 14, 1*4 = 4)
  // 999 => 4 (9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, 1*2 = 2)
  //   5 => 0 (5 is already single digits)
//P: first, check if the input num is already single digits, if so, return 0
  // if not, will need to convert the num to string, split the digits, then multiply them against each other to get the new num. if still not single digit, repeat, increasing a count variable each time
  // once the num is single digit, return the count variable

  function persistence(num) {
    let count = 0;
    let currentNum = num;
   
    if(currentNum < 10){
      return count;
    }else{
      while(currentNum > 9){
      currentNum = currentNum.toString().split('').reduce((a,c) => a * Number(c), 1);
      count ++;
      }
    }
   return count;
 }