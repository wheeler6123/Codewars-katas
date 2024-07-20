// Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

// Valid examples, should return true:

// isDigit("3")
// isDigit("  3  ")
// isDigit("-3.23")
// should return false:

// isDigit("3-4")
// isDigit("  3   5")
// isDigit("3 5")
// isDigit("zero")

// P: one input, a string that can contain various chars
// R: return a Boolean value indicating if the string contains a valid single integer or floating point number, and false otherwise
// E: '3' => true
//    ' 3 ' => true
//    '-3.23' => true
//    '3-4' => false
//    ' 3 5 ' => false
//    'zero' => false
// P: use JavaScripts built-in type conversion to attempt to coerce the string to a valid number, return the Boolean result    
//    The cases to check for that the line above won't work on are when the string is either empty or contains only spaces, both of which will convert to 0
//    For empty string, we can simply verify the input string has a length to eliminate that possibility
//    For strings with spaces, we can split the input string on space chars. A valid number with spaces before and/or after it will return an array with a length equal to exactly 1.
//    If the length of the array containing the input string split on spaces is anything other than 1, it will not represent a valid number so we can return false

function isDigit(s){
    if (s.split(' ').length != 1) return false;
    if(s.length && (Number(s) || Number(s)==0)) return true;
    return false;
  }