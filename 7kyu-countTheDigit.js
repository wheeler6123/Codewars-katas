/*Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

Examples:
n = 10, d = 1 
the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

nb_dig(25, 1) returns 11 since
the k*k that contain the digit 1 are:
1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
So there are 11 digits 1 for the squares of numbers between 0 and 25.
Note that 121 has twice the digit 1.*/


//P: two inputs, both integers one a digit between 0 and 9 inclusive
//R: return an integer for the number of times the input digit occurs in an array of nums showing the squares between 0 and n
//E: 10, 1 => 4 (the squares from 0-10 are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, and 100 there are 4 '1's in that array)
//P: declare a var to hold an array
  // loop from 0 to n, squaring each i and pushing to squares array
  // join squared array into 1 string, then split on the d input
  // return length-1 of the of split array


  function nbDig(n, d) {
    let squares = [];
   for(let i = 0; i<=n; i++){
     squares.push(i*i);
   }
   return squares.join('').split(d).length-1;
 }