/*You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3*/


//P: input will be an array, consisting of an odd number of integers (minimum length of 3), where all of the numbers but 1 will be the same
//R: return an integer for the one number in the array different from the others
//E: [1,1,2] => 2
//P: we know all of the numbers but one will be the same, we only need to find one that is different
  // we can start by sorting the array, either the same number will be in the front or the different number will 
  // check index 0 against index 1 of the sorted array, if they are the same, the different number will be at the end


  function stray(numbers) {
    let sorted = numbers.sort((a,b) => a-b);
    if (sorted[0] === sorted[1]){
      return sorted[sorted.length-1];
    } else{
      return sorted[0]
    }
  }