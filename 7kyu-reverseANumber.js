/*
Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

Examples
 123 ->  321
-456 -> -654
1000 ->    1
*/

//P: one input, an integer, can be pos or neg
//R: return the int with digits reversed, signage the same, remove preceeding 0s
//E: 123 => 321
  // -456 => -654
  // 1000 => 1
//P: split the abs val of the input num into array of chars
  // check last index of array, if 0, pop it off and continue until it's not 0
  // reverse the array of chars, join back together
  // return reversed and joined string as a num


  function reverseNumber(n) {
    let chars = Math.abs(n).toString().split('');
    while(chars[chars.length-1] === 0){
      chars.pop();
    }
    let revDigs = chars.reverse().join('');
    if(n>=0){
      return Number(revDigs);
    }else{
      return Number(revDigs)*-1;
    }
  }