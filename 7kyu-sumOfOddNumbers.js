/*Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8*/



//P: input is an integer greater than 0, representing the row on a triangle of consecutive odd numbers
//R: return the sum of the numbers in the nth row of the triangle, as an integer
//E: 1 -->  1
  // 2 --> 3 + 5 = 8
  // 3 --> 7 + 9 + 11 = 27
//P: the examples show a pattern where the sum is n^3


const rowSumOddNumbers = n => Math.pow(n,3)