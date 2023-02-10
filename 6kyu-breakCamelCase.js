/* 
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/



//P: one input, a string
//R: if the string is camelCase, split it and return the string with the words separated
//E: 'camelCasing' => 'camel Casing'
  // 'identifier' => 'identifier'
  // '' => ''
//P: first, check to see if the input string is empty or if it does not contain capitalization, if yes to either return input string
 // if it has caps, split the words before the cap, join back with a space, return



// complete the function
function solution(string) {
    if (!string.length || string === string.toLowerCase()){
      return string
    }else{
      return string.split(/(?=[^a-z])/).join(' ')
    }
  }