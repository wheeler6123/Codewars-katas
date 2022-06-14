/*Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.*/



//P: input will be array of integers, may be empty or just one element
//R: sum the remaining elements after removing the highest and lowest numbers
//E: [] => 0
    //[3] => 0
    //[ 3,5 ] => 0
    //[6,2,1,8,10] => 16
//P: function(arr){
  //check if length of array is null or less than 3, if so return 0
  //if length 3 or more, sort array in ascending order
  //remove first and last element in sorted array to get rid of highest and lowest numbers
  //sum remaining array and return value
//}

function sumArray(arr){
    let sum = 0;
    if (arr == null || arr.length < 3) {
      sum = 0;
    }else {
      let sortedArr = arr.sort((a,b) => a-b)
      sortedArr.pop();
      sortedArr.shift();
      sum = sortedArr.reduce((a,c) => a + c)
    }
    return sum;
  }