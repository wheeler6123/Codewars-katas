// For this kata you will have to forget how to add two numbers.

// It can be best explained using the following meme:

// Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

// In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

// You may assume both integers are positive integers.

// P: program accepts two inputs, both of which will be positive integers 
// R: program should return an integer representing the sum of the two integers using the specific math pattern given in the instructions
// E: (2, 11) => 13
//    (16, 18) => 214
//    (122, 81) => 1103
// P: will need to split the input integers into individual chars for adding, and reverse them to account for different lengths of input integers
//    declare a var called result, initialized as an empty array
//    determine the length of the largest input value, using Math.max, set its value as a var called loops
//    run a for-loop up the value of loops, where the char for each int at index i is added together, then insert the result as the value for the element in result at index i
//    put the result array back in correct order by reversing it again, then join the elements to create a single string, coerce it back into a Number type and return it

function add(num1, num2) {
    let num1Chars = num1.toString().split('').reverse();
    let num2Chars = num2.toString().split('').reverse();
    let loops = Math.max(num1Chars.length, num2Chars.length);
    let result = [];
    for(let i = 0; i < loops; i++){
      let currVal = (Number(num1Chars[i]) || 0) + (Number(num2Chars[i]) || 0);
      result[i] = currVal;
    }
    return Number(result.reverse().join(''));
  }

