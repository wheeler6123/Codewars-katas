/*In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

If you can, try writing it in only one line of code.*/


//P: two inputs, both integers
//R: return a list of the first input's multiples ending at the second input value. if the second input is a multiple of the first, it shoud be included.
//E: 2, 6 => 2,4,6
//P: declare var for new array
  // use a for loop to iterate through adding the multiples
  // push the multiples to the new array
  // return the array of multiples



  function findMultiples(integer, limit) {
    let multiples = [];
    for (let i = integer; i <= limit; i++){
      if(i%integer === 0){
        multiples.push(i);
      }
    } return multiples
  }
  