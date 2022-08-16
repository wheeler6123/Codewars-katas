/*You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
*/


//P: input will be a non-negative integer, that should represent an integral perfect square
//R: return the next integral perfect square following the one in the input. if the input is not an integral perfect square, return -1
//E: 121 --> 144
  // 625 --> 676
  // 114 --> -1 since 114 is not a perfect square
//P: check to validate input is integral perfect square, if not return -1
  // if the input is an integral perfect square, increase its squareroot by 1, square that, and return

  const findNextSquare = n => n % Math.sqrt(n) === 0 ? Math.pow((Math.sqrt(n)+1),2) : -1
