/*Return the Nth Even Number

Example(Input --> Output)

1 --> 0 (the first even number is 0)
3 --> 4 (the 3rd even number is 4 (0, 2, 4))
100 --> 198
1298734 --> 2597466
The input will not be 0.*/



//P: input will be a non-zero integer, n
//R: return the nth even number
//E: 1 => 0 (first even number is 0)
  // 3 => 4 (0,2,4)
//P: the nth even number will be the last even number before doubling the input, return 2n-2 (odds and evens will both be even when doubled)

const nthEven = n => 2*n - 2