/*
Nickname Generator

Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

If the 3rd letter is a consonant, return the first 3 letters.

nickname("Robert") //=> "Rob"
nickname("Kimberly") //=> "Kim"
nickname("Samantha") //=> "Sam"
If the 3rd letter is a vowel, return the first 4 letters.

nickname("Jeannie") //=> "Jean"
nickname("Douglas") //=> "Doug"
nickname("Gregory") //=> "Greg"
If the string is less than 4 characters, return "Error: Name too short".

Notes:

Vowels are "aeiou", so discount the letter "y".
Input will always be a string.
Input will always have the first letter capitalised and the rest lowercase (e.g. Sam).
The input can be modified
*/


//P: one param, a string containing a person's name
//R: return a nickname for that person, using either the first 3 letters if the 3rd letter is a consonant, or first 4 letters if 3rd is a vowel. If less than 4 chars in name, return 'Error: Name too short'
//E: 'Robert' => 'Rob'
  // 'Kimberly' => 'Kim'
  // 'Jeannie' => 'Jean'
  // 'Douglas' => 'Doug'


  function nicknameGenerator(name){
    const vowels = ['a', 'e', 'i', 'o', 'u']
    if(name.length < 4){
      return 'Error: Name too short'
    }else if(vowels.includes(name[2])){
      return name.slice(0,4);
    }else{
      return name.slice(0,3);
    }  
  }