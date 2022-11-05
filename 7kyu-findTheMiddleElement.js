/*As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.*/


//P: input will be an array containing 3 integers
//R: return the index of the number that is in the middle of the 3 numbers given
//E: [2,3,1] => 0 (2 is between 1 and 3, and is located in the 0th index)
  // [5,10,14] => 1 (10 is the middle number of the array and in the 1st index)
//P: use sort method and the 1 index to find the middle number
  // use the indexOf method to find the index of that number in the input array

  function gimme (triplet) {
    let sorted = triplet.slice().sort((a,b)=>a-b);
    let middleNum = sorted[1];
    return triplet.indexOf(middleNum);
  }