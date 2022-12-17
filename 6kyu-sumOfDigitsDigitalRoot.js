/* 
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/




//P: one input, a non-negative integer
//R: return the recursive root, summing the digits of the integer recursively until left with a single digit number
//E: 16 => 7
  //942 => 9+4+2 =15 => 6
//P: will use a while loop initialized at infinity and replaced with each recursive root until it is less than 10 (single digits)
  // will need to convert num to string, then split out individual chars and add them together each time


  function digitalRoot(n) {
    let initialNums = n.toString().split('')
    let root = initialNums.reduce((a,c) => a + Number(c), 0)
    
    if(root < 10){
      return root
    }
    
    while(root > 9){
      root = root.toString().split('').reduce((a,c) => a + Number(c), 0)
    }
    
    return root
    
    }