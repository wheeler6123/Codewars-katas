/* 
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/




//P: one input, an array containing integers. in every array input, there will be exactly 1 integer that occurs an odd number of times
//R: return the integer that occurs an odd number of times
//E: [7] => 7
  // [1,1,2] => 2
  //[0,1,0,1,0] => 0
//P: will need to create a Map that will hold the integer as a key and a count as a value
  // iterate through array, counting occurrences and adding occurring ints to the count Map
  // after array has been counted, iterate through Map looking for the odd count value, return that key
  

  function findOdd(A) {
  
    const map = A.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
    
    let odd;
    
    map.forEach((value, key) => {
      if(value % 2 === 1){
        odd = key
      }
    })
    
    return odd;
  }