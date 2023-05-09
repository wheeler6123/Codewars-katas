/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/


//P: two inputs, both arrays containing integers, array a and array b
//R: return array a with all instances of the values in array b removed 
//E: arrayDiff([1,2],[1]) => [2]
  // arrayDiff([1,2,2,2,3],[2]) => [1,3]
//P: use array.filter on a to filter out any elements that are present in b
  // return filtered array


  function arrayDiff(a, b) {
    return a.filter(el => !b.includes(el))
  }