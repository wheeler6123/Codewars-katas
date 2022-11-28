/*You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

lst contains integers, that means it may contain some negative numbers
if lst is empty or contains a single element, return 0
lst is not sorted
[1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
[1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7
Have fun!*/


//P: one input, array of integers that may be pos/neg/0
//R: return the maximum difference between the smallest and largest integers in the input array, if empty or 1 element, return 0
//E: [1,2,3,4] => 3 (4-1)
//P: check that the input arr is at least 2 elements, if not return 0 
  // if 2+ elements, return the difference between the max and the min in the array

  const maxDiff = list => list.length < 2 ? 0 : Math.max(...list) - Math.min(...list)