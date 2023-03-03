/*
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
*/


//P: one input, a string that may contain a mixed assortment of upper and lowercase letters
//R: Convert the string to either all uppercase or all lowercase, using which route would change the fewest chars as the deciding factor. if they are equal, return all lowercase
//E: "coDe" = "code"
  // "CODe" = "CODE"
  // "coDE" = "code"
//P: split the string into an array of chars
  // check the length of the array filtered to only uppercase against the length filtered to only lowercase
  // depending on which is longer, convert the original input string to the opposite case
  // if they equal, convert string to lowercase 
  // return correct string

  function solve(s){
    let chars = s.split('');
    let lowers = chars.filter(c => c === c.toLowerCase())
    let uppers = chars.filter(c => c === c.toUpperCase())
    
    if(uppers.length < lowers.length || lowers.length === uppers.length){
      return s.toLowerCase();
    }else{
      return s.toUpperCase();
    }
}