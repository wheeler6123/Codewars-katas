/*Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []*/


//P: one input should be an array of nums but array could be empty or even null passed in
//R: if the array contains nums, return the array sorted from least to most If empty or null, return empty array
//E: [1,2,10,50,5] => [1,2,5,10,50]
  // null => []
//P: first check that the array has length, if not return empty array
  // if array has length, return it sorted

  const solution = nums => nums ? nums.sort((a,b) => a-b) : []