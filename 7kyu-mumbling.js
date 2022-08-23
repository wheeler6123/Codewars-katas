/*This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.*/


//P: input will be a string containing only letters
//R: return a string comprised of the input letters, multiplied by their index in the string
//E: accum("abcd") -> "A-Bb-Ccc-Dddd"
  // accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
  // accum("cwAt") -> "C-Ww-Aaa-Tttt"
//P: declare a var to hold an array containing the letters in the input string split into individual elements
  // declare a var to hold a new array that will eventually be converted into the output string
  // iterate through the first array, and for each el, push 1 capitalized letter to the second array, followed by i-1 * lowercase letters
  // join the second completed array back together, separating words with '-' and return the string


  function accum(s) {
	let inputArr = s.split('');
  let outputArr = [];
  for(let i = 0; i < inputArr.length; i++){
    let tempArr = [];
    tempArr.push(inputArr[i].toUpperCase());
    for (let j = 0; j < i; j++){
      tempArr.push(inputArr[i].toLowerCase())
    }
    outputArr.push(tempArr.join(''));
  }return outputArr.join('-');
}