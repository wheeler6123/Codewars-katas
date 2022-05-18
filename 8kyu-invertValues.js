/*Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.*/


//P: Input is an array, all values are integers
//R: each value in array should be return as the opposite neg-pos or pos-neg
//E: invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
    //invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
    //invert([]) == []
//P: function (array){
    //declare new variable for reversedArray
    //loop through initial array, multiply each value by -1, add to new array
    //return new array
//}

function invert(array){
    const reversedArr = [];
    array.forEach(value => {
      reversedArr.push(value*-1);
    })
    return reversedArr;
  }