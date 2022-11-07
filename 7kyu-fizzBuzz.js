/*Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]*/

//P: one input, an integer always at least 1 or greater
//R: return an array containing a count of 1 to n (input integer), with multiples of 3 replaced with 'Fizz', multiples of 5 replaced with 'Buzz', and multiples of 3 and 5 replaced with 'FizzBuzz'
//E: 3 => [1,2,'Fizz']
  // 16 => [1,2,'Fizz',4,'Buzz','Fizz',7,8,9,'Buzz',11,'Fizz',13,14,'FizzBuzz',16]
//P: use a for loop to iterate from 1 to n, pushing the appropriate element to a results array
  // return the results array


// Return an array
function fizzbuzz(n){
    let results = [];
    for(let i = 1; i<=n; i++){
      if(i%3===0 && i%5 === 0){
        results.push('FizzBuzz');
      }else if(i%3===0 && i%5!=0){
        results.push('Fizz')
      }else if(i%3!=0 && i%5===0){
        results.push('Buzz')
      }else{
        results.push(i)
      }
    }return results;
  }