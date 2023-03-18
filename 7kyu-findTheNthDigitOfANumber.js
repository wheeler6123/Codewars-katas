/*
Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

Note
If num is negative, ignore its sign and treat it as a positive value
If nth is not positive, return -1
Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0
Examples(num, nth --> output)
5673, 4 --> 5
129, 2 --> 2
-2825, 3 --> 8
-456, 4 --> 0
0, 20 --> 0
65, 0 --> -1
24, -8 --> -1

*/


//P: two inputs, both integers may be pos or neg, first is num second is the nth digit to find in num, counting right to left
//R: return the nth digit of num, counting right to left. if num is neg, ignore sign and treat as pos. if nth is not pos, return -1, if nth is greater than length of num, return 0
//E: 5673, 4 => 5
  // 129, 2 => 2
  // -2825, 3 => 8
  // -456, 4 => 0
  // 65, 0 => -1
//P: first check validators, if nth is < 1, return -1. if nth is > num.length after converting to string format, return 0
  // if inputs are valid,return the nth-1 index of the num after converting to string and reversing, remember to convert back to num form

  function findDigit(num, nth){
    if(nth < 1) return -1;
    let revNum = Math.abs(num).toString().split('').reverse().join('');
    if (nth>revNum.length) return 0;
    return Number(revNum[nth-1]);
  }