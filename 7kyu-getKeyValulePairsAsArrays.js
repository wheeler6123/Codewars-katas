/*Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

Example:

keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]
Style Points (JS/CoffeeScript only): This kata only tests for data that uses object literal notation (simple objects). For extra style, can you get your method to check for objects that extend their prototype?*/


//P: one input, an object that may contain a set of key/value pairs or may be empty
//R: return two arrays, one containing the keys and the other containing the values 
//E: {a: 1, b: 2, c: 3} => [['a', 'b', 'c'], [1,2,3]]
  // {} => [[], []]
  // {1: 'a', 2: 'b', 3: 'c'} => [['1', '2', '3'], ['a', 'b', 'c']]
//P: declare two vars, one for keys and one for values, then use the built-in object methods to assign each to the vars
  //check if the object is empty, if not return an array containing both the keys and values arrays
  // if empty, return two empty arrays

  function keysAndValues(data){
    let keys = Object.keys(data)
    let values = Object.values(data)
    if(data){
      return [keys, values]
    }else{
      return [[],[]]
    }
  }