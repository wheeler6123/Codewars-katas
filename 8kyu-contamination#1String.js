// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"

// P: two inputs, both strings, the first can be anywhere from 0 chars to multiple chars, while the second will be either 0 or 1 char
//    only one of the inputs will ever possibly be empty, it is specified that there will never be a case in which both are empty
// R: return a string, empty if either of the input strings is empty, or replacing the chars in the input string with the char given as the second input
// E: 'abc', 'z' => 'zzz'
//    '', 'z' => ''
//    'abc', '' => ''
//    '//case', ' ' => '      '
// P: first, check to see that both input strings are not empty, if one or more is, return an empty string
//    if both input strings contain at least one char, return a string using only the input char, repeated until it is the same length as the first input string value


function contamination(text, char){
    if (text.length && char.length){
      let mutatedString = '';
      for(let i = 0; i < text.length; i++){
        mutatedString = mutatedString + char;
      }
      return mutatedString;
    } else {
      return '';
    }
  }