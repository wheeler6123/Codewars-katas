/*Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

min([1,2,3,4,5], 'value') // => 1
min([1,2,3,4,5], 'index') // => 0*/


//P: two inputs, first an array filled with at least 1 number and no duplicates, the second being a string that will hold either 'value' or 'index'
//R: if the string input is 'value', return the smallest value in the array. if 'index', return the index of the smallest value in the array
//E: [1,2,3,4,5] 'value' => 1
  // [1,2,3,4,5] 'index' => 0
//P: declare a var to hold value of minimum value in array
  // check toReturn input to see if we need to return the value or the index, using if/else to return the right result

  function min(arr, toReturn) {
    let minimum = Math.min(...arr);
    if(toReturn === 'value'){
      return minimum
    }else{
      return arr.indexOf(minimum)
    }
  }