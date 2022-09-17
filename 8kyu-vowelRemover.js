/*Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata*/


//P: input will be a string
//R: return the input string after removing any lowercase vowels
//E: 'hello' => 'hll'
  // 'goodbye' => 'gdby'
  // 'HELLO' => 'HELLO'
//P: use filter to remove lower case vowels from input string and return
  

function shortcut (string) {
    return string.replace(/[aeiou]/gi, '');
}