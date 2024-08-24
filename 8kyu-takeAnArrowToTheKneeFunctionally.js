// Arrow style Functions
// Come here to practice the Arrow style functions Not much else to say good luck!
// Details
// You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.

// Examples
// These are example of how to convert a number to an ascii Character:
// Javascript => String.fromCharCode(97) // a
// C# => Tools.FromCharCode(97) // a

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// P: one input, an array of integers that will all correspond to an ASCII character
// R: return a string made from the chars converted from the codes in the input array
// E: [84,101,115,116] => 'Test'
// P: iterate through array and convert each char code to the corresponding ASCII char
//    join the resulting chars into a string and return

var ArrowFunc = function(arr) {
    return arr.map(code => String.fromCharCode(code)).join(''); //Complete this function
  }