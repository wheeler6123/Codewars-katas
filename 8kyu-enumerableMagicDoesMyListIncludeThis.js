/* 
Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.
*/



//P: two inputs, first an array of elements, second an individual value that may or may not be contained in the array
//R: return boolean value for if the second input value is included in the array
//E: [1,2,3,4,5], 3 => true
  // [1,2,3,4,5], 8 => false
//P: use the includes() method to check for the item in the array, return the result

const include = (arr, item) => arr.includes(item)