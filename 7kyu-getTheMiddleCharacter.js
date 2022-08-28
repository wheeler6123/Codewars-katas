/*You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.

*/


//P: input will be a string containing a word with at least one character
//R: return the middle character of the string, if odd length return 1 exact middle, if even length return 2 middle chars
//E: 'test' => 'es'
  // 'testing' => 't'
  // 'middle' => 'dd'
//P: will use an if/else, checking length mod 2 to see if length is even or odd
  // if length is odd, return character at the index of length/2 rounded up
  // if length is even, return the two characters starting with length/2 - 1


const getMiddle = s => s.length % 2 === 1 ? s.charAt(Math.floor(s.length/2)) : s.slice(s.length/2 - 1, s.length/2 + 1)