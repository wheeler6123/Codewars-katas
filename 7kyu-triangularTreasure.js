/* 
Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

1st (1)   2nd (3)    3rd (6)
*          **        ***
           *         **
                     *
You need to return the nth triangular number. You should return 0 for out of range values:

For example: (Input --> Output)

0 --> 0
2 --> 3
3 --> 6
-10 --> 0
*/




//P: one input, an integer of positive, negative, or zero value
//R: return an integer representing the Nth triangular number
//E: 1 => 1
  // 2 => 3
  // 3 => 6
  //-10 => 0
//P: the formula for positive numbers is n(n+1)/2


const triangular = n => n < 0 ? 0 : n*(n+1)/2