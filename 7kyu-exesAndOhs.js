/*Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false*/


//P: input will be a string, can contain any characters
//R: return a boolean value for if the string contains an equal number of x's and o's
//E: 'ooxx' => true
  // 'xoxo' => true
  // 'xoxx' => false
  //'x<x?!o>O' => true
  // 'squirrel' => true
//P: convert input str to lower case to avoid case issues then split into array of chars
  // create a var to hold count of 'x' and anoter to hold count of 'o'
  // loop through input str and count x's and o's
  // compare the two count vars and return the boolean value


  function XO(str) {
    str = str.toLowerCase().split('');
    let x = 0;
    let o = 0;
    for (let i = 0; i < str.length; i++){
      if(str[i] === 'x'){
        x++;
      }else if(str[i] === 'o'){
        o++;
      }
    }
  return x === o
}