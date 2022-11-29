/*In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

Good luck!

*/


//P:one input, an array containing various strings, lowercase only, no spaces
//R: return an array containing the strings of the input array but removing all consecutive duplicate letters from each string
//E: dup(["abracadabra","allottee","assessee"]) => ["abracadabra","alote","asese"]
  // dup(["kelless","keenness"]) = ["keles","kenes"]
//P: the strings will need to be reviewed 1 by 1, as the program should not look for duplicates between words (i.e. last char - first char)
  // when looking at each word, the word will be split into individual characters
  // then, the array of chars for each word can be iterated over, checking to see if the next char matches the current one
  // if it does, the next char should be removed from the string (repeating for multiple consecutive dupes)
  // once all the dupes are removed, the remaining chars should be joined back together, and put back into an array
  // after all of the words have been evaluated, and all modified strings have been added to an array, return the array

  function removeDupes(str){
    let chars = str.split('');
    let noDupes = chars.filter(function(char, pos, arr){
                 return pos === 0 || char != arr[pos-1]
                 })
    return noDupes.join('')
  }
  
  const dup = s => s.map(el => removeDupes(el))