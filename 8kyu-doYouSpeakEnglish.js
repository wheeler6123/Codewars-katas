/* 
Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

Upper or lower case letter does not matter -- "eNglisH" is also correct.

Return value as boolean values, true for the string to contains "English", false for it does not.
*/



//P: one input, a string
//R: return a boolean value for the if the input string contains the word 'English', ignoring casing
//E: 'abcEnglishdef' => true
  // 'abcnEglishdef' => false
//P: use the string.includes() and string.toLowerCase() methods to check for the word 'english'


function spEng(sentence){
    return sentence.toLowerCase().includes('english')
  }