/*Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"*/

//P: inputs will be lowercase letters a-z, no integers or special characters. may be 1 or 2 strings 
//R: longest possible string using distinct letters compiled from the letters in the input strings
//E: a = "xyaabbbccccdefww"
    // b = "xxxxyyyyabklmopq"
    //longest(a, b) -> "abcdefklmopqwxy"
    
//P: function(str1, str2){
  //create arrays of individual letters from each string
  //declare variable with value of a new array that will hold all of the unique characters from both strings
  //loop through strings, pushing unique letters to array
  //sort array a-z
  //return string comprised of sorted characters from array
//}

function longest(strA, strB){
    let arrA = strA.split('');
    let arrB = strB.split('');
    arrA = arrA.sort((a,b)=>a-b);
    arrB = arrB.sort((a,b)=>a-b);
    let combinedArr = arrA.concat(arrB);
    let uniqueChars = combinedArr.filter((c, index) => {
      return combinedArr.indexOf(c) === index;
  });
    uniqueChars = uniqueChars.sort();
    return uniqueChars.join('');
  }