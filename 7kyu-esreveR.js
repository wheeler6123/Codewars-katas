/*
Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)
*/


//P: input will be an array, may contain any type of elements
//R: return the input array reversed, without using a built-in method
//E: [1,2,3] => [3,2,1]
//P: use a reverse for loop to iterate through the array backwards, pushing each el to a results array
  // return results array

  function reverse(arr){
    let result = [];
    for(let i=arr.length-1; i>=0; i--){
      result.push(arr[i])
    }
    return result;
  }