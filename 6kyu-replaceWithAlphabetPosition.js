/* 
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/



//P: one input, a string
//R: return a string of integers representing each letter in the string's position in the alphabet
//E: '"The sunset sets at twelve o' clock."' => "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
//P: create a data array of the letters 
  // iterate through and check each char for location in alphabet array, if there, add the index + 1 to an empty string
  // return string of indexes after iterating through all chars

  let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  function alphabetPosition(text) {
    let positions = '';
    
    for(let i = 0; i<text.length; i++){
      let lowerText = text.toLowerCase()
      let currentChar = lowerText[i]
      if(letters.includes(currentChar)){
        positions += `${letters.indexOf(currentChar) + 1} `;
      }
    }
    
    return positions.trim();
  }