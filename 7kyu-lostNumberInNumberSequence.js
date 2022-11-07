/*An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

Example:

The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.
If no number was deleted from the starting array, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []).*/


//P: two inputs, first a sorted array from 1 to N, second a jumbled array of those numbers that may or may not have one deleted
//R: if a number was deleted in the second array, return that number. if none were deleted, return 0
//E: [1,2,3,4,5,6,7,8,9], [3,2,4,6,7,8,1,9] => 5
//P: first check if the lengths of the two arrays match, if they do, return 0 as there was no deletion
  // if they don't match, filter the arr1 array to check for elements with indexOf -1 in arr2


  function findDeletedNumber(arr, mixArr) {
    if(arr.length === mixArr.length || !arr.length){
      return 0;
    }else{
      return Number(arr.filter(l => mixArr.indexOf(l) === -1))
    }
  }