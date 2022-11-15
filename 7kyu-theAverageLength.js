/*Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

A few examples:

['u', 'y'] =>  ['u', 'y'] // average length is 1
['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
If the average length is not an integer, use Math.round().
The input array's length > 1*/


//P: one input param, an array containing strings of various lengths. each string will be 1 or more of the same lowercase letter 
//R: return an array using the same characters as the input strings, but all the same length, equal to the average length of the input
//E: ['u', 'y'] => ['u', 'y']
  // ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc']
//P: first need to determine average length of strings in input
  // declare a var to hold total length, use forEach to add the length of each string to var
  // determine average length by dividing the total length figure by the length of the original input arr
  // using the average and a for loop, populate a new results array with each char from the input array times the average

  function averageLength(arr) { 
    let totalLength = 0;
    arr.forEach( el => totalLength += el.length)
    let average = Math.round(totalLength/arr.length);
    let result = [];
    for(let i = 0; i<arr.length; i++){
      let firstChar = arr[i][0];
      let string = '';
      for(let j = 0; j<average; j++){
        string += firstChar;
      }result.push(string);
    }return result;
  }

//const averageLength = (arr) =>
//  arr.map((e) => e[0].repeat(Math.round(arr.join('').length / arr.length)))
