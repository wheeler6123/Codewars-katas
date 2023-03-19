/*
Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.
*/


//P:one input, a string that may contain any of the 128 ascii chars
//R: return a boolean value to determine if the string contains only unique chars
//E: '  nAa' => false, contains 2 spaces
  // 'abcdef' => true
  // 'aA' => true, lc and uc chars are different in ascii
//P: iterate over string, pushing ascii char codes to a char code array
  // filter the array to remove any dupes
  // return boolean value for if filtered array length matches unfiltered array length

  function hasUniqueChars(str){
    let chars = str.split('');
    let codes = chars.map(el => el.charCodeAt(el));
    let noDupeCodes = codes.filter(el => codes.indexOf(el) === codes.lastIndexOf(el));
    return codes.length === noDupeCodes.length;
  }