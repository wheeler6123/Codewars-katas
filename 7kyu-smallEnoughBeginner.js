/*You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.*/


//P: two inputs, one array containing positive integers and an integer representing the limit
//R: return a boolean value for if all of the integers in the array are less than or equal to the limit
//E: [66,101], 200 => true
  // [4,56,91,82,102,171,67], 100 => false
//P: use the every method to check each el is less than or equal to the limit

const smallEnough = (a,limit) => a.every(l => l <= limit)