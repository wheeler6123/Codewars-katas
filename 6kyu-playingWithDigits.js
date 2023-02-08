/* 
Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1

695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
In other words:

Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.

Note: n and p will always be given as strictly positive integers.

digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
*/



//P: two inputs, both integers, the first being a given integer, and the second being the initial exponent 
//R: if a positive integer k exists, such that the sum of the digits of n taken to the successive powers of p is equal to k*n, return k, otherwise return -1
//E: 89, 1 => 1 (8^1 + 9^2) = 89 = 89 * 1
//P: generate an array of individual digits in the input num
  // iterate through the array of digits, raising them to an exponent value beginning with p and increasing by 1 with each digit added
  // once you have the sum of the digits each raised to the appropriate exponent, see if that sum is a multiple of the input num n by checking the modulo
  // if it is, return the integer k that can be multiplied by n to reach the sum, it not, return -1


  function digPow(n, p){
    let digits = n.toString().split('')
    let total = 0;
    for(let i = 0; i < digits.length; i++){
      total += Math.pow(Number(digits[i]), p+i)
    }
    return total % n === 0 ? total/n : -1
  }