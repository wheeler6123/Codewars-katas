/*Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)*/


//P: two inputs, integers, can be pos or neg
//R: return the sum of all numbers between a,b (inclusive) and return. if a === b, return a or b
//E: (1, 0) --> 1 (1 + 0 = 1)
  // (1, 2) --> 3 (1 + 2 = 3)
  // (0, 1) --> 1 (0 + 1 = 1)
  // (1, 1) --> 1 (1 since both are same)
  // (-1, 0) --> -1 (-1 + 0 = -1)
  // (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
//P: declare var to hold empty array
  // use if/else to run a for loop starting with a or b, whichever is lower
  // loop should add each number from start to finish into array
  // return array reduced to the sum of elements

  function fullArr (start, stop){
    let outputArr = [];
    for (let i = start; i <= stop; i++){
      outputArr.push(i)
    } return outputArr.reduce((a,c) => a + c);
  }
  
  
  function getSum( a,b ){
    return a < b ? fullArr(a,b) : fullArr(b,a);
  }