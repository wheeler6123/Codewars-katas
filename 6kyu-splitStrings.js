/* 
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/


//P: one input a string of varying length that may be empty
//R: return an array containing the input string broken into 2 character pieces. If the last piece is only one, character, add an underscore to make it 2 chars long
//E: 'abc' => ['ab', 'c_']
  // 'abcdef' => ['ab', 'cd', 'ef']
//P: set up an empty array to add the pieces to
  // iterate through string, slicing two character sections and pushing to array
  // check each slice to ensure two chars, if only one left add the underscore
  // return the array of pieces


  function solution(str){
    let pieces = [];
   
    for(let i = 0; i < str.length; i+=2){
      let piece = str.substring(i, i+2)
      if(piece.length === 2){
        pieces.push(piece)
      }else{
        piece += '_'
        pieces.push(piece)
      }
    }
   
   return pieces
 }