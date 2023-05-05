/*
Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer.
*/


//P: one input, an array of integers, can be pos or neg, always at least 2 elements
//R: return the sum of the two largest integers in the array
//E: [10, 14, 2, 23, 19] => 42 (23+19)
//P: sort the array in descending order, return the sum of the values in indices 0 and 1


function largestPairSum (numbers) {
    let sorted = numbers.sort((a,b) => b - a);
    return sorted[0] + sorted[1];
  }