/*An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

*/


//P: input will be a string, either containing a word or empty
//R: return a boolean value for if the string is an isogram, ignoring letter case and assuming empty strings are isograms
//E: 'isogram' => true
  // 'moOse' => false
  // 'aba' => false
//P: to avoid case issues, first convert the input string to lower case
  //split the input string to create and array of characters
  //declare a var to hold an array of filtered characters from the inupt string
  //check to see if the input arr chars are the same as the filtered arr chars, return boolean


  function isIsogram(str){
    let inputArr = str.toLowerCase().split('');
    let filteredArr = [...new Set(inputArr)];
    return inputArr.join('') === filteredArr.join('');
  }