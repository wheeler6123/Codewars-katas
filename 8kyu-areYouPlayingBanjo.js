/*Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.*/



//P: Input name given, always a valid string
//R: If name begins with R/r 'name plays banjo', else 'name does not play banjo'
//E: areYouPlayingBanjo('Rick') = 'Rick plays banjo' expected
  //areYouPlayingBanjo('roger') = 'roger plays banjo' expected
  //areYouPlayingBanjo('Dave') = 'Dave does not play banjo' expected
//P:function(name){
  //convert name[0] to lower case for testing
  //check if converted first character is 'r'
  //return expected message dependong on results of previous line
//}

const areYouPlayingBanjo = name => name[0].toLowerCase() === 'r' ? `${name} plays banjo` : `${name} does not play banjo`


