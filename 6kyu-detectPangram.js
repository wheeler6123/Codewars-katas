/* 
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/



//P: input param is a string of various lengths
//R: return a boolean value for if the string contains every letter of the alphabet, regardless of case
//E: "The quick brown fox jumps over the lazy dog" => true
  // "This is not a pangram" => false
//P: first, convert the string to lowercase so that casing won't matter
  // next, create a new set from the letters in the lowercase string
  // if the set does not have a length of 26, it does not contain every letter in the alphabet!



  const isPangram = string => new Set(string.toLowerCase().replaceAll(/[^a-z]/g, '')).size === 26