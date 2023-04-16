/*
#Get the averages of these numbers

Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.

Example:

Input:  [ 1, 3, 5, 1, -10]
Output:  [ 2, 4, 3, -4.5]
If the array has 0 or 1 values or is null, your method should return an empty array.

Have fun coding it and please don't forget to vote and rank this kata! :-)
*/


//P: one param, an array of integers that may be pos or neg or null
//R: return an array of integers where each element is the average of an input element plus its following element, if there is one
//E: [2,2,2,2,2] => [2,2,2,2]
  // [2,-2,2,-2,2] => [0,0,0,0]
  // [1,3,5,1,-10] => [2,4,3,-4.5]
//P: check input array length to ensure at least 2 values present, if not, return empty array
  // create an array to hold results
  // iterate through input array getting average of each i/i+1 pair
  // return results array


  function averages(numbers) {
    let results = [];
    console.log(numbers)
    if(numbers === null || numbers.length < 2) return results;
    
    for(let i=0; i<numbers.length-1; i++){
      results.push((numbers[i]+numbers[i+1])/2);
    }
    
    return results;
  }