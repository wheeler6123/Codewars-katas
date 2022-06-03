/*I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.*/


//P: input will be two arrays of integers
//R: return sum of all elements in both arrays
//E: [1, 2, 3], [4, 5, 6] => 21
//P: function (arr1, arr2){
  //return arr1.reduce() + arr2.reduce()
//}

const arrayPlusArray = (arr1, arr2) => arr1.reduce((a,c)=>a+c) + arr2.reduce((a,c)=>a+c)