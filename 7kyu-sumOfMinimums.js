/*Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values.

ENJOY CODING :)*/


//P: input will be a 2D nested list of integers, will never be empty and integers always positive
//R: return the sum of the minimum value in each sublist
//E: [[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]] => 9 (2+3+4)
//P: declare a var to hold an array containing the minimum value from each input subarray
  // use forEach to grab the min value and push to min array
  // return min array reduced to sum

  function sumOfMinimums(arr) {
    let mins = []
    arr.forEach(sub => {
      mins.push(Math.min(...sub))
    })
    return mins.reduce((a,c) => a+c,0)
  }