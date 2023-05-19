/*
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/


//P: one input, an integer
//R: return an array with the sequence of nums counting from n down to 1
//E: 5 => [5,4,3,2,1]
//P: return a reversee for loop where i = n and counts down to 1, pushing each i to the result array

function reverseSeq(n){
    let result = [];
    for(let i = n; i>0; i--){
      result.push(i);
    }
    return result;
  }