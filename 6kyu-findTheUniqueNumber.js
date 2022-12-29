/* 
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.


*/



//P: one input, an array containing a set of at least 3 integers, where all will be the same except one
//R: return the unique number in the array
//E: [1,1,1,1,1,2,1,1,1] => 2
  // [0, 0, 0, 0.55, 0, 0] => 0.55
//P: filter the array to find the one element that only occurs once
  // return that element


  function findUniq(arr) {
    let unique = arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el))
    return unique[0]
  }