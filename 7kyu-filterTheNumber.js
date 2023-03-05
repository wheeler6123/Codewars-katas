/*
Filter the number
Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

Task
Your task is to return a number from a string.

Details
You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.


*/


//P: one input, a string of mixed letters and numbers
//R: return the numbers from the string only, as an integer
//E: '123' => 123
  // 'ab1c2d3' => 123
//P: split string into array of chars, then filter array to remove letters
  // join nums in array and return as a num


  function filterString(val){
    let nums = val.split('').filter(char => char.charCodeAt(0) > 47 && char.charCodeAt(0) < 58);
    return Number(nums.join(''))
  }