/*
Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

Example:

solution({a: 1, b: '2'}) // should return "a = 1,b = 2"
*/


//P: one input, an object containing various key/value pairs such as a:1, b:'2' etc
//R: return a string that states each key and its value
//E: {a: 1, b: '2'} => 'a = 1, b = 2'
//P: create a helper function that takes a key value pair and returns it as ${key} = ${value}
  // loop through the pairs object, use the helper function to convert each key/value pair to string and add it to a results accumulator string
  // return final result string

  function substring(k,v){
    return `${k} = ${v}`;
  }
  
  function solution(pairs){
    let result = '';
    const keyArr = Object.keys(pairs);
    const valArr = Object.values(pairs);
    
    for(let i=0; i<keyArr.length; i++){
      if(i!==keyArr.length-1){
        result += `${substring(keyArr[i], valArr[i])},`;
      }else{
        result += `${substring(keyArr[i], valArr[i])}`;
      }
    }
    return result;
  }