/* 
In the following 6 digit number:

283910
91 is the greatest sequence of 2 consecutive digits.

In the following 10 digit number:

1234567890
67890 is the greatest sequence of 5 consecutive digits.

Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.


*/

//P: one input, a string of integers 
//R: return the largest number possible using 5 consecutive digits in the string
//E: '1234567890' => 67890
  // '364119772' => 64119
//P: need to iterate through the string, checking blocks of 5 consecutive nums against a current max
  // if block of 5 nums is greater than current max, it becomes new max
  // return max at end of string


  function solution(digits){
    let max = 0;
    for(let i=2; i<digits.length; i++){
      let block = digits.slice(i-2, i+3)
      if(Number(block) > max){
        max = Number(block);
      }
    }
    return max
  }