/*Task
Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

Notes :
Array/list size is at least 3 .

Array/list numbers could be a mixture of positives , negatives and zeros .

Repetition of numbers in the array/list could occur , So (duplications are not included when summing).

Input >> Output Examples
1- maxTriSum ({3,2,6,8,2,3}) ==> return (17)
Explanation:
As the triplet that maximize the sum {6,8,3} in order , their sum is (17)

Note : duplications are not included when summing , (i.e) the numbers added only once .

2- maxTriSum ({2,1,8,0,6,4,8,6,2,4}) ==> return (18)
Explanation:
As the triplet that maximize the sum {8, 6, 4} in order , their sum is (18) ,

Note : duplications are not included when summing , (i.e) the numbers added only once .

3- maxTriSum ({-7,12,-7,29,-5,0,-7,0,0,29}) ==> return (41)
Explanation:
As the triplet that maximize the sum {12 , 29 , 0} in order , their sum is (41) ,

Note : duplications are not included when summing , (i.e) the numbers added only once .*/


//P: one input, an array of integers that can be positive, negative or 0
//R: return an integer representing the maximum sum achievable using 3 integers in input array with no duplicates
//E: [3,2,6,8,2,3] => 17
  // [2,9,13,10,5,2,9,5] => 32
//P: use Set to pull all the unique integers from the input, eliminating the dupes
  // sort the set in descending order
  // return the sum of the first 3 indices
 


  const maxTriSum = nums => [... new Set(nums)].sort((a,b) => b-a).slice(0,3).reduce((a,c) => a+c,0)