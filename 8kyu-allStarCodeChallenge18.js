/*This Kata is intended as a small challenge for my students

All Star Code Challenge #18

Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
Notes:

The first argument can be an empty string
The second string argument will always be of length 1*/


//P: input will be 2 params, both strings. first string can be empty or of unknown length, second string is only 1 character
//R: return the number of times the second string occurs within the first string
//E: 'hello', 'o' => 1
  // 'hello', 'l' => 2
  // '', 'z' => 0
//P: function(str,letter){
    //check if str is empty, if so return 0
    //if not empty, split the string on the input letter
    //subtract 1 from length of returned array, this is the number of times the input letter occurred in string
//}

function strCount(str, letter){
    if(str.length === 0){
      return 0;
    } else{
      return ((str.split(letter).length) -1)
    }
  }