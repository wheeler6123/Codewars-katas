/*Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.*/



//P: input will be an array of numbers
//R: return the array with any duplicates removed
//E: [1,2] => [1,2]
  //[1,1,2] => [1,2]
//P: create a var for new array
  // loop through input array, check if element matches any index of new array, if not add it
  // return new array


  function distinct(a) {
    let unique = [];
    for (let i = 0; i < a.length; i++){
      if(!unique.includes(a[i])){
        unique.push(a[i]);
      }
    }return unique;
  }