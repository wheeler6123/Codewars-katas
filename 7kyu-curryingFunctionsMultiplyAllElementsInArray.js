// To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

// The returned array should consist of each of the elements from the first array multiplied by the integer.

// Example:

// multiplyAll([1, 2, 3])(2) = [2, 4, 6];
// You must not mutate the original array.

// Here's a nice Youtube video about currying, which might help you if this is new to you.

// P: this program accepts one input, an array of integers
// R: the original function should return a function, which takes an additional integer param, and returns a new array consisting the original input array, with each element multiplied by the integer argument of the second function
// E: [1,2,3], (2) => [2,4,6]
// P: create a shallow copy of the input array assigned to a new variable called result, using the spread operator
//    return a function that takes an argument x as the integer multiple, and iterates through the result array, replacing each element with its value multiplied by the multiplier 
//    the anonymous function within should return the result array following the conclusion of the for loop

function multiplyAll(arr) {
    let result = [...arr];
    return function(x){
      for(let i = 0; i<result.length;i++){
        result[i] = result[i]*x;
      }
      return result;
    }
  }