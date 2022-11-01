/*An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"*/


//P:two inputs, both strings
//R: return boolean value for if the two strings input are anagrams of each other (case insensitive)
//E: 'foefet', 'toffee' => true
  // 'ound', 'round' => false
//P: first check if the two strings have the same length, if not return false
  // if same length, split each string into an array of individual characters, sorted alphabetically
  // check one array against the other, if all indices are equal, it's an anagram


// write the function isAnagram
var isAnagram = function(test, original) {
    if(test.length !== original.length){
      return false;
    }else{
      let testArr = test.toLowerCase().split('').sort();
      let originalArr = original.toLowerCase().split('').sort();
      for(let i = 0; i < test.length; i++){
        if(testArr[i] !== originalArr[i]){
          return false;
        }
      }
    }return true;
  };