/*Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer*/



//P: input will be an integer
//R: return an integer comprised of each digit in the input integer squared
//E: 9119 => 811181
  // 3212 => 9414
//P: declare a var that will contain an array comprised of each digit of the input integer. will need to convert input to string to create the array
 // declare second var that will hold a new array, where we will put each squared integer
 // join the array of squared nums back into one and return as an integer


 function squareDigits(num){
    let inputArr = num.toString().split('');
    let outputArr = [];
    for(let i = 0; i < inputArr.length; i++){
      let squared = Math.pow(+inputArr[i], 2);
      outputArr.push(squared);
    }
    return +outputArr.join('')
  }