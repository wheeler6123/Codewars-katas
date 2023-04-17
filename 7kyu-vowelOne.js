/*
vowelOne
Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

All non-vowels including non alpha characters (spaces,commas etc.) should be included.

Examples:

vowelOne( "abceios" ) // "1001110"

vowelOne( "aeiou, abc" ) // "1111100100"
*/


//P: one input, a string
//R: return a string of 1s and 0s, where vowels become 1s and everything else becomes a 0
//E: 'abceios' => '1001110'
  // 'aeiou, abc' => '1111100100'
//P: since spaces count, first replace any spaces in the string with periods to make it simpler
  // split the string into an array of chars
  // iterate through char array, if char.toLowerCase() is vowel, add '1' to results string, if not add '0'
  // return result string


  function vowelOne(s){
    let noSpace = s.replaceAll(' ', '.');
    let chars = noSpace.split('');
    let result = '';
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    for(let i=0; i<chars.length; i++){
      if(vowels.includes(chars[i].toLowerCase())){
        result += '1'
      }else{
        result += '0'
      }
    }
  }