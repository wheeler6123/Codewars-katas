/*Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.*/


//P: one input, an array containing various integers
//R: return a string indicating if the input array is sorted, and if so, in ascending or descending order
//E: [1,2] => 'yes, ascending'
//P: set up a comparison function that will take in two arrays and compare them both on length and check every index for the corresponding value
  // for the challenge function, set up two vars that will hold the input array, sorted both in ascending and descending order
  // use if/else to check if the input arr matches the ascending and descending arrays using compare function
  // if a match is found for either sorted array, return appropriate string
  // if no match, return 'no'

  const equals = (a, b) =>
  a.length === b.length &&
  a.every((v, i) => v === b[i]);

function isSortedAndHow(arr){
  let ascending = arr.slice().sort((a,b) => a-b)
  let descending = arr.slice().sort((a,b) => b-a)
  if(equals(arr,ascending)){
    return 'yes, ascending'
  }else if(equals(arr,descending)){
    return 'yes, descending'
  }else{
    return 'no'
  }
}