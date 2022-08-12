/*Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
*/



//P: input will be a string
//R: return the string replacing all vowels with exclamation points
//E: 'Hi!' => 'H!!'
  // 'aeiou' => '!!!!!'
//P: use the replace method with a regular expression to select all vowels and replace with exclamation points


const vowels = /[aeiouAEIOU]/gi;

const replace = s => s.replace(vowels, '!');