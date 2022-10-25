/*In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

See test cases for more examples.

Good luck!*/

//P: one input, an array containing arrays containing integers
//R: return an integer for the number of unique arrays that can be formed by picking one element from each subarray
//E: [[1,2], [4], [5,6]] => 4 ([1,4,5], [1,4,6], [2,4,5], [2,4,6])
//P: first, we want to eliminate duplicates from the input arrays, we can do so by mapping each array to a new set
  // once we have removed duplicates from the arrays, we can take the length of each subarray and multiply it by the lengths of the other subarrays to get the total unique combinations
  // return the total unique combinations

  function solve(arr) {
    let result = 0;
    let noDupes = arr.map(el => [...new Set(el)]);
    result = noDupes.reduce((a,c) => a * c.length,1)
    return result
  };