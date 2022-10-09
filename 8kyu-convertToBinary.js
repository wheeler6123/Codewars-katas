/*Task Overview
Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

//to_binary(1)  /* should return 1 */
//to_binary(5)  /* should return 101 */
//to_binary(11) /* should return 1011 */
//Example:

//toBinary(1)  /* should return 1 */
//toBinary(5)  /* should return 101 */
//toBinary(11) /* should return 1011 */


//P: input will be a non-negative integer, n
//R: return the input number in binary format
//E: 1 => 1
  // 5 => 101
  // 11 => 1011
//P: declare var to hold an array
  // use a for loop to divide the quotient (starting with n) by 2, each time leaving pushing the modulus to the front of the array
  // once the quotient is 0, the array is full
  // return the array, joined together and converted to a number


  function toBinary(n){
    let binary = [];
    let q = n;
    if (n<2){
      return n;
    }else{
      while(q != 0){
        let mod = q%2;
        binary.unshift(mod);
        q = Math.floor(q/2);
      }
    }return n < 2 ? n : Math.floor(binary.join(''))  
   } 