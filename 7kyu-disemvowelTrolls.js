/*Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

*/



//P: input will be a string, can contain upper and lower case letters
//R: return the input string with all of the vowels removed, for the sake of this problem, y is not a vowel
//E: "This website is for losers LOL!" => "Ths wbst s fr lsrs LL!"
  // "What are you, a communist?" => "Wht r y,  cmmnst?"
//P: use a regular express to remove the vowels from the str and return it


const disemvowel = str => str.replace(/[aeiouAEIOU]/gi, "")