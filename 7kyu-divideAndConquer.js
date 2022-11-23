/*Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

Return as a number.*/



//P: one input, an array containing both number and string representations of integers
//R: return an integer representing the result of subtracting the sum of the string integers from the sum of the non-string integers
//E: [9, 3, '7', '3'] => 2 (12 - 10)
//P: declare two vars, each to hold the value of filtering the input array to the appropriate types and then reducing to find the sum
  // subtract the string integer sum from the number integer sum and return

  function divCon(x){
    //declare vars to hold the sums of the string and non-string integers
    let stringNums = x.filter(el => typeof el === 'string').reduce((a,c) => a + Number(c), 0)
    let numNums = x.filter(el => typeof el !== 'string').reduce((a,c) => a + Number(c), 0)
    // return the result of subtracting the sum of string ints from the sum of number ints
    return numNums - stringNums
  }