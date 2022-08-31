/*Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.*/

//P: input will be a string, consisting only of lower case letters and/or spaces
//R: return the NUMBER of vowels in the given string (y is not a vowel for this problem)
//E: 'yes' => 1
  // 'dog' => 1
  // 'abracadabra' => 5
//P: declare a collection of vowels to check against
  // convert the input string to an array of chars
  // filter the array to remove all non-vowel chars
  // return the length of the filtered array

  const vowels = ['a', 'e', 'i', 'o', 'u']

  function getCount(str) {
    let arr = str.split('')
    let onlyVowels = arr.filter(char => vowels.indexOf(char) != -1);
    return onlyVowels.length;
  }