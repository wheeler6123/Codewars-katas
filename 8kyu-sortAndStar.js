/*You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.*/



//P: input will be array containing a collection of strings
//R: return a string containing the letters of the first word after sorting the collection of strings alphabetically, with each letter of the returned word separated by '***'
//E: ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"] => 'b***i***t***c***o***i***n'
//P: function (arr) {
  // create var with value set to original array sorted in alphabetical order
  // return first value from sorted array, split into individual chars and rejoined with '***' between each letter
//}

function twoSort(s) {
    let sortedArr = s.sort();
    return sortedArr[0].split('').join('***')
  }