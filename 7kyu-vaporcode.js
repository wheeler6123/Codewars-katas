/*
ASC Week 1 Challenge 4 (Medium #1)

Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

Note that spaces should be ignored in this case.

Examples
"Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
"Why isn't my code working?"  -->  "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"
*/


//P: one param, a string that contains a sentence
//R: return a string of the input string, but every char is upper case and separated by 2 spaces
//E: 'Hey there' => 'H  E  Y  T  H  E  R  E'
//P: split the input string into an array of chars
  // iterate over array, convert each char to uppercase and add it to a results string
  // return the trimmed result string in vaporcode

  function vaporcode(string) {
    let chars = string.split('');
    let vaporStr = '';
    
    for(let i = 0; i < chars.length; i++){
      if(chars[i]){
        vaporStr += `${chars[i].toUpperCase()}  `;
      }
    }
    
    return vaporStr.split('    ').join(' ').trim();
  }