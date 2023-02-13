/* 
Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1

*/




//P: two inputs, both strings, supposed to be lowers but not always the case
//R: if either of the two inputs is not a letter, return -1, if both are letters of the same case return 1, and if both are letters but not same case return 0
//E: 'a', 'g' => 1
  // 'A', 'C' => 1
  // 'b', 'G' => 0
  // '0', 'g' => -1
//P: first check to ensure both chars are letters, if not, return -1
  // if both chars are letters, check if they are both same case, returning 1 if yes and 0 if no
 
  function sameCase(a, b){
    if((a.toLowerCase() !== a.toUpperCase()) && (b.toLowerCase() !== b.toUpperCase())){
      if((a === a.toLowerCase() && b === b.toLowerCase()) || (a === a.toUpperCase() && b === b.toUpperCase())){
        return 1;
      }else{return 0}
    }else{return -1}
  }