/*Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.

For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.

If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.*/


//P: input will be two integers, both always non-negative integers representing dimensions of a chocolate bar. Input may be invalid
//R: if invalid, return 0. Else, return an integer for the number of breaks to reach single 1x1 squares of chocolate
//E: 5,5 => 24
  // 1,1 => 0
  // '' => 0
  // 3x3 => 8
//P: the number of breaks is equal to the product of the input - 1
  // check for valid input and return n*m - 1 or 0 if invalid input

  const breakChocolate = (n,m) => n > 0 && m > 0 ? n*m -1 : 0