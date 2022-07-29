/*We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

arr(5) // => [0,1,2,3,4]
Note: The parameter is optional. So you have to give it a default value.

*/



//P: input is optional! if input present, will be an integer
//R: return an array counting from 0 to input-1
//E: 5 => [0,1,2,3,4]
  // () => []
//P: declare var for empty array
  // if input is empty, return empty array
  // if input is present, use for loop to iterate through and push integers to array
  // return array


  function arr(n){
    let array = [];
    if (!n){
      array = [];
    }else{
      for(let i = 0; i < n; i++){
        array.push(i);
      }
    }
    return array;
  }