/*JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]*/

//P: one input, an array of integers
//R: return the array with only even numbers
//E: [2,4,5,6] => [2,4,6]
//P: use the filter method to check each int for even odd, return evens only

const getEvenNumbers = arr => arr.filter(el => el%2 === 0)