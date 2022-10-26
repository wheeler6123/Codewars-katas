/*Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]*/



//P: input will be an array, possibly empty, containing strings of single lowercase letters
//R: return an array with each string prepended with a numbered index, starting with 1
//E: [] => []
  // ['a', 'b', 'c'] => ['1: a', '2: b', '3: c']
//P: check for empty array and return empty array if found
  // if not empty, iterate through array adding 'i: ' to each el
  // return array with each el numbered beginning with 1


  var number=function(array){
    let numberedArr = [];
    if(array.length < 1){
      return [];
    }else{
      for(let i = 1; i <= array.length; i++){
        let numbered = `${i}: ${array[i-1]}`;
        numberedArr.push(numbered);
      }
    }return numberedArr;
  }