/*Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321*/

//P: input will be non-negative integer
//R: return highest possible integer from rearranging individual digits in given integer
//E: 42145 should return 54421
    //145263 should return 654321
//P: function(n){
  //declare variable to hold value of an array of single digits, created by converting input integer to string and splitting into separate chars then converting back to digits
  //sort array in descending order
  //join sorted digits back together, convert back to num and assign to variable to be returned
//}

function descendingOrder(num){
    let numString = num.toString();
    numString = numString.split('')
    let digitArr = [];
    for (let i = 0; i < numString.length; i++){
      digitArr.push(numString[i]);
    }
    let sortedArr = digitArr.sort((a,b) => b-a);
    let highestNum = '';
    for(let n = 0; n < digitArr.length; n++ ){
      highestNum = highestNum.concat(digitArr[n]);
    }
    return Number(highestNum);
    
  }