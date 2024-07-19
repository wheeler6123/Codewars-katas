// Given an unsorted array of 3 positive integers [ n1, n2, n3 ], determine if it is possible to form a Pythagorean Triple using those 3 integers.

// A Pythagorean Triple consists of arranging 3 integers, such that:

// a2 + b2 = c2

// Examples
// [5, 3, 4] : it is possible to form a Pythagorean Triple using these 3 integers: 32 + 42 = 52

// [3, 4, 5] : it is possible to form a Pythagorean Triple using these 3 integers: 32 + 42 = 52

// [13, 12, 5] : it is possible to form a Pythagorean Triple using these 3 integers: 52 + 122 = 132

// [100, 3, 999] : it is NOT possible to form a Pythagorean Triple using these 3 integers - no matter how you arrange them, you will never find a way to satisfy the equation a2 + b2 = c2

// Return Values
// For Python: return True or False
// For JavaScript: return true or false
// Other languages: return 1 or 0 or refer to Sample Tests.

// P: one input, an unsorted array containing 3 positive integers
// R: return a Boolean value for whether or not the 3 integers in the array could be arranged to satisfy the Pythagorean Triple formula of a^2 + b^2 = c^2
// E: [5,3,4] => true, as 3^2 + 4^2 = 5^2
//    [100,3,999] => false, as no arrangement of these 3 integers can satisfy the equation 
// P: square each of the integers, then check the 3 possible combinations for the formula and return true if any are valid, else false

function isPythagoreanTriple(integers) {
    let n1 = integers[0]*integers[0];
    let n2 = integers[1]*integers[1];
    let n3 = integers[2]*integers[2];
    
    return (n1+n2==n3) || (n2+n3==n1) || (n3+n1==n2);
  }