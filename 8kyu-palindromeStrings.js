/*Palindrome strings
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

Examples(Input ==> Output)
"anna"   ==> true
"walter" ==> false
12321    ==> true
123456   ==> false*/



//P: input can be a word, phrase, number, or any other sequence of characters including capital letters, punctuation, etc
//R: return boolean value for if the input is a palindrome. if input is a number, convert it to a string first
//E: 'anna' => true
  // 'walter' => false
//P: convert input to string using toString method to check against number input
  //check if input string is equal to the string reversed
  //return true or false


  const isPalindrome = line => String(line) === [...String(line)].reverse().join('')