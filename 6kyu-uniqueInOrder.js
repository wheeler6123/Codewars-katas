/* 
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/


//P: one input, can be a string, array, etc containing a sequence of letters and/or integers
//R: return an array containing a list of elements but removing any consecutive duplicates 
//E: 'AAABBBCCCDDDAABBB' => ['A', 'B', 'C', 'D', 'A', 'B']
  // 'ABBCcAD' => ['A', 'B', 'C', 'c', 'A', 'D']
  // [1,2,2,2,3,3] => [1,2,3]
//P: if input is array, should be able to map a new array removing consecutive duplicates. if string, can convert to array and do the same
  // once consecutive dupes are removed, the array is ready to be returned


  function uniqueInOrder(input){
    let convertedString = [];
    
    if (typeof input === 'string'){
      convertedString = input.split('')
      return convertedString.filter((char,index) => char !== convertedString[index - 1])
    }
    
    return input.filter(((char,index) => char !== input[index - 1]))
    
  }