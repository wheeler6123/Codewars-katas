/*Create a function with two arguments that will return an array of the first (n) multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).

Examples:

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]*/



//P: input will be two integers greater than 0
//R: return an array of first (n) multiples of (x)
//E: countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
  //countBy(2,5) === [2,4,6,8,10]
//P: function (n,x){
  //declare variable to hold empty array
  //loop through pushing multiples of x up to n times into the array
  //return array
//}

function countBy(x,n){
    let arr = [];
    for(let i = 1; i <= n; i++){
      arr.push(i*x)
    }
    return arr;
  }