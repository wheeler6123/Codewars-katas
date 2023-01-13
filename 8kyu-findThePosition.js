/* 
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"
*/


//P: one input, a single alphabetic character as a string
//R: return the position of that letter in the alphabet as a string 'Position of alphabet: X'
//E: 'a' => 'Position of alphabet: 1'
//P: first, make an array of all letters in the alphabet
  //determine the index of the letter in the array, add 1 to account for 0 indexing, return the formatted string with the correct position



  function position(letter){
    let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    return `Position of alphabet: ${letters.indexOf(letter) + 1}`
  }