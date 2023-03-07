/*
This kata is the first of a sequence of four about "Squared Strings".

You are given a string of n lines, each substring being n characters long: For example:

s = "abcd\nefgh\nijkl\nmnop"

We will study some transformations of this square of strings.

Vertical mirror: vert_mirror (or vertMirror or vert-mirror)
vert_mirror(s) => "dcba\nhgfe\nlkji\nponm"
Horizontal mirror: hor_mirror (or horMirror or hor-mirror)
 hor_mirror(s) => "mnop\nijkl\nefgh\nabcd"
or printed:

vertical mirror   |horizontal mirror   
abcd --> dcba     |abcd --> mnop 
efgh     hgfe     |efgh     ijkl 
ijkl     lkji     |ijkl     efgh 
mnop     ponm     |mnop     abcd 
Task:
Write these two functions
and

high-order function oper(fct, s) where

fct is the function of one variable f to apply to the string s (fct will be one of vertMirror, horMirror)

Examples:
s = "abcd\nefgh\nijkl\nmnop"
oper(vert_mirror, s) => "dcba\nhgfe\nlkji\nponm"
oper(hor_mirror, s) => "mnop\nijkl\nefgh\nabcd"
Note:
The form of the parameter fct in oper changes according to the language. You can see each form according to the language in "Sample Tests".
*/


//P: two params, first a specific function to run either for horizontal or vertical mirror, second a string of n lines, with each line also being n chars long
//R: return the correct string resulting from the specified function on the input string
//E: horMirror, "lVHt\nJVhv\nCSbg\nyeCt" => "yeCt\nCSbg\nJVhv\nlVHt"
  // horMirror, "njMK\ndbrZ\nLPKo\ncEYz" => "cEYz\nLPKo\ndbrZ\nnjMK"
  // vertMirror, "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu" => "QHdgSh\noaMDnH\nXxNNlC\nHxxvRi\nAvVTqb\nuRySvw"
  // vertMirror, "IzOTWE\nkkbeCM\nWuzZxM\nvDddJw\njiJyHF\nPVHfSx" => "EWTOzI\nMCebkk\nMxZzuW\nwJddDv\nFHyJij\nxSfHVP"
//P: first, write the two functions that will flip the string appropriately
  // both will start by splitting input string into array of individual strings
  // vert string will then go through the array and reverse the order of chars in each substring
  // hor will simply reverse the order of the elements in the array of substrings
  // both will then join the substrings back together
  // the final function will take in the correct funtion and the input string, and return the result of the specified function on the input string


  function vertMirror(strng) {
    const strings = strng.split('\n');
    let revStrings = strings.map(str => str.split('').reverse().join(''));
    return revStrings.join('\n');
}
function horMirror(strng) {
    const strings = strng.split('\n');
    let revStrings = strings.reverse();
    return revStrings.join('\n')
}
function oper(fct, s) {
    return fct(s);
}