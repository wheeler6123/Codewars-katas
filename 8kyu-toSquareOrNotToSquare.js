/*Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
Notes
The input array will always contain only positive numbers, and will never be empty or null.*/



//P: input param will be an array of integers, always positive and never empty or null
//R: return a new array, comprised of processed integers of input array. if integer has an integer square root, add that to new array. otherwise, square the number and add that.
//E: [4,3,9,7,2,1] => [2,9,3,49,4,1]
//P: function (arr) {
  // create var for new array
  // iterate through each integer in input array, determine if integer has an integer square root
  // if true, add square root to new array, otherwise square the input integer and add the result to new array
  // return new array
//}


function squareOrSquareRoot(array) {
    let newArr = [];
    let isSquare = function (n) {
    return Math.sqrt(n) === Math.round(Math.sqrt(n));
    }
    for(let i = 0; i < array.length; i++) {
      if (isSquare(array[i])){
        newArr.push(Math.sqrt(array[i]))
      } else{
        newArr.push(array[i]*array[i])
      }
    };
    return newArr;
  }