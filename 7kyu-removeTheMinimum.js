/*
The museum of incredible dull things
The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]
*/


//P: one input, an array generally containing integers but could be empty
//R: if empty, return empty array. if not, remove the smallest element from the array without mutating the original array and return a new array without the lowest num
//E: [1,2,3,4,6] => [2,3,4,5]
  // [5,3,2,1,4] => [5,3,2,4]
//P: create a new copy of the array to work on without mutating original
  // sort the new array, and find the lowest value in it
  // return a filtered copy of the original array with the value of the lowest num removed


  function removeSmallest(numbers) {
    if(numbers.length <2) return [];
    let sortedCopy = [...numbers].sort((a,b) => a-b);
    let lowVal = sortedCopy[0];
    let lowValIndex = numbers.indexOf(lowVal);
    return [...numbers.slice(0, lowValIndex),...numbers.slice(lowValIndex+1)];
  }