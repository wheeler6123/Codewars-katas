/*Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24*/


//P: input will be array of integers, will not be empty
//R: return product of multiplying each integer by the next, in order
//E: [1,2,3] => 6
  //[4,1,1,1,4] => 16
  //[2,2,2,2,2,2] => 64
//P: function(arr){
  //return accumulated product of multiplying each element by the nex
//}

const grow = arr => arr.reduce((a,c) => a*c, 1)