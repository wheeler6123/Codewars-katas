/*
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/



//P: one input, an array of integers that may be pos or neg
//R: return the smallest integer in the array
//E: [34,15,88,2] => 2
  // [34,-345,-1,100] => -345
//P: use the Math.min method to return smallest val in array


class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args);
      }
  }