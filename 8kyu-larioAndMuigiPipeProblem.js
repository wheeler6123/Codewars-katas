/*Issue
Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

Task
Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

Example
Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8*/



//P: input will be an array of integers 
//R: return an array that includes all numbers between the min and max value of the input array
//E: Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8
//P: create function to create an array from a range
  // call said function to create array from min to max in input, by 1



  function pipeFix(numbers){
    let full = [];
    for (let i = Math.min(...numbers); i <= Math.max(...numbers); i++){
      full.push(i);
    }
    return full;
  }