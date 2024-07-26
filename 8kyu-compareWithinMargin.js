// Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b.

// Please note the following:

// When a is close to b, return 0.
// For this challenge, a is considered "close to" b if margin is greater than or equal to the absolute distance between a and b.
// Otherwise...

// When a is less than b, return -1.

// When a is greater than b, return 1.

// If margin is not given, treat it as if it were zero.

// Assume: margin >= 0

// Tip: Some languages have a way to make parameters optional.

// P: program accepts 2 or 3 inputs, all integers. the first two, a and b, can be positive or negative, the third is optional and can be greater than or equal to 0. if not provided, assume it is 0.
// R: return an integer from -1, 0, or 1. if the difference between a and b is less than or equal to the margin, return 0, otherwise return -1 if a is less than b, or 1 if a is greater than b
// E: 4,5 => -1
//    5,5 => 0
//    -6,-5, => -1
//    2,5,3 => 0
// P: if no margin, return result based solely on a being less than or greater than b
//    if margin, check if difference between a and b is < or = to margin, if so return 0
//    if not within margin, default to a being less than or greater than b

function closeCompare(a, b, margin){
    if(!margin){
      return a < b ? -1 : a == b ? 0 : 1
    } else {
      if(Math.abs(a-b) <= margin){
        return 0;
      }else {
        return a < b ? -1 : 1;
      }
    }
  }