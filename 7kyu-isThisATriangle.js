/*Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

*/


//P: 3 inputs, all integers representing the length of a side of a triangle
//R: boolean value for if the given side lengths can create a triangle
//E: 1,2,2 => true
  // 7,2,2 => false
//P: triangle inequality theorem says the lengths of any 2 sides of a triangle must be greater than the remaining length
  // if any 2 sides add up to less than a third side, it cannot be an actual triangle
  // if any of a + b > c, a + c > b, or b + c > a is false, return false


  function isTriangle(a,b,c){
    return a+b > c && b+c > a && a+c > b;
  }