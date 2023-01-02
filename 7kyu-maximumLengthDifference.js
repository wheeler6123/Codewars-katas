/* 
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
Bash note:
input : 2 strings with substrings separated by ,
output: number as a string
*/



//P: two inputs, both arrays of various lengths containing various strings of various lengths
//R: return the largest possible difference in length between a string in arr1 and a string in arr2
//E: ['a', 'abc', 'abcedof'], ['abcdefghijklmno', 'abcdef', 'ab'] => 14 (15-1)
//P: sort the two arrays so they are in order from shortest to longest
  // return the absolute difference between the longest string in 1 array and the shortest in the other



  function mxdiflg(a1, a2) {
    let max = 0
    if(!a1.length || !a2.length){
      return -1
    }else{
      for(let i = 0; i < a1.length; i++){
        for(let j = 0; j < a2.length; j++){
          if(Math.abs(a1[i].length - a2[j].length) > max){
            max = Math.abs(a1[i].length - a2[j].length)
          }
        }
      }
    }
    return max  
  }