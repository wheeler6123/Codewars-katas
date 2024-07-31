// Number is a palindrome if it is equal to the number with digits in reversed order. For example, 5, 44, 171, 4884 are palindromes, and 43, 194, 4773 are not.

// Write a function which takes a positive integer and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.

// If the input number is already a palindrome, the number of steps is 0.

// All inputs are guaranteed to have a final palindrome which does not overflow MAX_SAFE_INTEGER.

// Example
// For example, start with 87:

//   87 +   78 =  165     - step 1, not a palindrome
//  165 +  561 =  726     - step 2, not a palindrome
//  726 +  627 = 1353     - step 3, not a palindrome
// 1353 + 3531 = 4884     - step 4, palindrome!
// 4884 is a palindrome and we needed 4 steps to obtain it, so answer for 87 is 4.

// Additional info
// Some interesting information on the problem can be found in this Wikipedia article on Lychrel numbers.

// P: program accepts one input, n, an integer
// R: program should return an integer, representing the number of steps required to obtain a palindrome from the input integer
//    if the input integer is already a palindrome, the number of steps to return is 0
//    if the input number is not an integer, reverse the digits and add to the original number
//    repeat the procedure until the resulting number is a palindrome, then return the number of steps
// E: 1 => 0
//    88 => 0
//    87 => 4 (87+78 = 165, 165+561 = 726, 726+627 = 1353, 1353+3531 = 4884, 4884 is a palindrome)
// P: declare 3 vars, one for the current val, initialized as input value n, one for a step counter initialized as 0, one for reversed, which represents the reversed value of the current val
//    using a while loop that checks if the current val equals the reversed val, add the current val and the reversed val, setting the result as the new current val
//    update the reversed var to calculate a new reversed val based on the updated current val, then increment the step counter
//    once the while loop completes (aka the current val is now a palindrome), return the number of steps

var palindromeChainLength = function(n) {
    let current = n;
    let steps = 0;
    let reversed = Number(current.toString().split('').reverse().join(''));
    
    while(current != reversed){
      current+=reversed;
      reversed = Number(current.toString().split('').reverse().join(''));
      steps++;
    }
    return steps;
  };