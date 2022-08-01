/*This is a spin off of my first kata.

You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

Examples
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL*/


//P: input will be a string containing sequence of numbers separated by commas
//R: return a new string with the same sequence of numbers but after removing the first and last number and separated by a space. If the there is nothing to return, return null
//E: "1,2,3"      =>  "2"
  // "1,2,3,4"    =>  "2 3"
  // "1,2,3,4,5"  =>  "2 3 4"

  // ""     =>  NULL
  // "1"    =>  NULL
  // "1,2"  =>  NULL
//P: declare a var to hold input string split on each comma
  // if the array of input elements has a length less than 3, there will be nothing to return so return null
  // if the array is length 3 or more, remove the first and last elements and return the rest separated by a space


  function array(arr){
    let result = arr.split(',');
    if (result.length < 3){
      result = null;
    }else {
      result.pop();
      result.shift();
      result = result.join(' ');
    }return result;
  }