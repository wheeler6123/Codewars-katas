// The Collatz conjecture (also known as 3n+1 conjecture) is a conjecture that applying the following algorithm to any number we will always eventually reach one:

// [This is writen in pseudocode]
// if(number is even) number = number / 2
// if(number is odd) number = 3*number + 1
// #Task

// Your task is to make a function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1.

// #Examples

// hotpo(1) returns 0
// (1 is already 1)

// hotpo(5) returns 5
// 5 -> 16 -> 8 -> 4 -> 2 -> 1

// hotpo(6) returns 8
// 6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

// hotpo(23) returns 15
// 23 -> 70 -> 35 -> 106 -> 53 -> 160 -> 80 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

// P: program accepts one input, n, a positive integer
// R: program should return an integer, for the number of times needed to perform the Collatz conjecture to get n = 1
// E: 1 => 0, as 1 is already = 1 so no times needed
//    5 => 5 (16 -> 8 -> 4 -> 2 -> 1)
// P: the instructions suggest input n will always be a positive, so no need to validate input
//    declare a count var that is initialized to 0
//    use a while loop that checks for n to NOT be equal to 1
//    in the while loop, first check for odd/even using mod
//    run formula corresponding to odd or even n on each iteration of while loop
//    increment count value for each loop
//    return the value of the count var

function hotpo(n){
    let count = 0;
    while(n != 1){
      if(n%2 == 0){
        n = n/2;
        count++;
      } else {
        n = 3 * n + 1;
        count++;
      }
    }
    return count;
  }