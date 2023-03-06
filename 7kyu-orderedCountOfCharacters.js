/*
Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation depending on your language.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/


//P: one input, a string consisting various chars
//R: return an array of arrays, with each subarray containing a char in the string in order of its appearance and the count of its occurrences
//E: 'hello' => [['h', 1], ['e', 1], ['l', 2], ['o', 2]]
//P: create a helper function to find the index of the subarray in the results array, checking to see if the char has been added already
  // if it hasn't, add a new subarray to results array containing [char, 1] to initialize the first occurrence
  // if it has, use the index of the subarray to increment the count for that char
  // return the result array with the chars and their counts


  const index = (arr, char) => arr.findIndex(subArr => subArr[0]===char);

  function orderedCount(text){
    let result = [];
    
    for(const char of text){
      if(index(result, char)===-1){
        result.push([char, 1]);
      }else{
        let sub = index(result, char);
        result[sub][1] += 1;
      }
    }  
    return result;
  }