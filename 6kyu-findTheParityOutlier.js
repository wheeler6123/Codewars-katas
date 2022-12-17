/* 
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/




//P: one input, an array containing at least 3 integers. The array will either be entirely odd integers or entirely even integers, except for one outlier
//R: return an integer, the outlier integer from the array
//E: [2, 4, 0, 100, 4, 11, 2602, 36] => 11
  //[160, 3, 1719, 19, 11, 13, -21] => 160
//P: create two arrays, one filterd to be only evens and one filtered to be only odds
  // check which array will only have one element, return that element


  function findOutlier(integers){
    const evens = integers.filter(int => Math.abs(int) % 2 === 0)
    const odds = integers.filter(int => Math.abs(int) % 2 === 1)
    
    return evens.length === 1 ? evens[0] : odds[0]
  }