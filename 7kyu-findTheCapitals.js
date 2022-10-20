/*Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );*/


//P: input will be a string, containing a mix of upper and lower case letters
//R: return an array containing the indices of all capital letters in the string
//E: 'CodEWaRs' => [0,3,4,6] 
//P: split the array into individual chars
  // iterate through array checking each char for caps, if cap push index location to an array that will hold result
  // return result array with indices of caps for solution


  var capitals = function (word) {
	let result = [];
  let chars = word.split('');
  for(let i = 0; i<chars.length; i++){
    if(chars[i].toUpperCase() === chars[i]){
      result.push(i);
    }
  }return result
};