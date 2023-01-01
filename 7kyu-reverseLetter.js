/* 
Task
Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string
*/



//P: one input, a string that may contain various characters including letters, digits, and symbols
//R: return the string after removing any non-alphabetic characters and then reversing it
//E: 'krishan' => 'nahsirk'
  // 'krish21an' => 'nahsirk'
//P: use regex to remove all non-alphabet chars
  // return reversed str


  function reverseLetter(str) {
    const filtered = str.replaceAll(/[^a-z]/g, '')
    return filtered.split('').reverse().join('')
  }