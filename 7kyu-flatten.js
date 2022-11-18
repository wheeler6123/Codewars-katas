/*Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

flatten([1,2,3]) // => [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]]) // => [[1,2,3]]*/


//P: one input, an array. array may be empty, or will contain 1 or more subarrays (which may include even more nested arrays!)
//R: return an array, flattening only one level
//E: [] => []
  // [1,2,3] => [1,2,3]
  // [[1,2,3], ['a','b'], [1,2,3]] => [1,2,3,'a','b',1,2,3]
//P: use the .flat() method built into array Object. default levels to flatten is 1
 
const flatten = arr => arr.flat()