/*
Modify the spacify function so that it returns the given string with spaces inserted between each character.

spacify("hello world") // returns "h e l l o   w o r l d"
*/


//P: one input, a string
//R: return the input string with a space added between each character
//E: 'hello' => 'h e l l o'
  // '12345' => '1 2 3 4 5'
//P: split the string on every char, join it back together with a space


const spacify = str => str.split('').join(' ');