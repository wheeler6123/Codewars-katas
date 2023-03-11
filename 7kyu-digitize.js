/*
Given a non-negative integer, return an array / a list of the individual digits in order.

Examples:

123 => [1,2,3]

1 => [1]

8675309 => [8,6,7,5,3,0,9]
*/


//P: one input, a non-negative integer
//R: return an array of the individual digits in order
//E: 123 => [1,2,3]
  // 1 => 1
//P: convert the num to a string, then push a num constructor for each digit in string to results array
  // return results array


  function digitize(n) {
    let results = [];
    let string = n.toString();
    for(const char in string){
      results.push(+string[char]);
    }
    return results;
  }