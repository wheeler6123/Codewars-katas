/*Description:
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
remove("Hi!") == "Hi"
remove("Hi!!!") == "Hi!!"
remove("!Hi") == "!Hi"
remove("!Hi!") == "!Hi"
remove("Hi! Hi!") == "Hi! Hi"
remove("Hi") == "Hi"*/


//P: input will be a string, always and never empty
//R: return the string, removing one exclamation point if it exists, and only one
//E: 'Hi!' => 'Hi'
  // 'Hi!!!' => 'Hi!!'
  // '!Hi!' => '!Hi'
  // 'Hi' => 'Hi' 
//P: check for an exclamation point at the end of the string, if one is there remove it and return

const remove = input => input[input.length-1] === '!' ? input.slice(0,-1) : input