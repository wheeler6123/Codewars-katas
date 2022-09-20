/*You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

Examples (input -> output)
* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
Happy coding!*/



//P: two inputs, both arrays containing only integers
//R: return a single array containing all of the unique integers in the input arrays, sorted from lowest to highest and removing any duplicate integers
//E: [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  // [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//P: declare a var to hold a new array
  // reassign each input array to a sorted value
  // loop through the arrays and check for dupes, add each unique element to the new array
  // return new array

  function mergeArrays(arr1, arr2) {
    arr1 = arr1.sort((a,b)=>a-b)
    arr2 = arr2.sort((a,b)=>a-b)
    let merged = arr1;
    for (let i = 0; i < arr2.length; i++){
      if(merged.indexOf(arr2[i]) === -1){
        merged.push(arr2[i]);
      }
    }return merged.sort((a,b)=>a-b)
  }