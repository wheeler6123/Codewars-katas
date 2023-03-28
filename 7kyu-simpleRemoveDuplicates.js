/*
Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

Example:
For input: [3, 4, 4, 3, 6, 3]

remove the 3 at index 0
remove the 4 at index 1
remove the 3 at index 3
Expected output: [4, 6, 3]

More examples can be found in the test cases.
*/


//P: one input, an array of nums
//R: return an array, removing the duplicates leaving the LAST occurrence of each num
//E: [3,4,4,3,6,3] => [4,6,3]
  // [1,2,1,2,1,2,3] => [1,2,3]
//P: first validate input array contains nums by checking length of input array against length of an array containing a new set object
  // if no dupes, return input array
  // if dupes, reverse the input array, then create an array from a new set object using the reversed input array, removing dupes and keeping original order
  // reverse the array back, and return it

  function solve(arr) {
    if(arr.length === [...new Set(arr)].length){
      return arr;
    }
    
    let noDupes = [...new Set(arr.reverse())];
    
    return noDupes.reverse();
  }