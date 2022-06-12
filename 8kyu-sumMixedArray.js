/*Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.*/


//P: input will be array consisting of integers in both string and number format
//R: sum of all array values
//E: [9, 3, '7', '3'] => 22
  //['5', '0', 9, 3, 2, 1, '9', 6, 7] => 42
//P: function(arr){
  //declare variable to hold a new array
  //set variable to hold new array mapped from input array, converting all elements to numbers
  //declare variable to hold sum 
  //sum new array of all numbers, assign to to variable
  //return sum
//}

function sumMix(arr){
    let numArr = arr.map(el => Number(el));
    let sum = numArr.reduce((a,c)=> a+c,0);
    return sum
  }