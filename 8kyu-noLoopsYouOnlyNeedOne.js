/* 
*** No Loops Allowed ***

You will be given an array a and a value x. All you need to do is check whether the provided array contains the value, without using a loop.

Array can contain numbers or strings. x can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.
*/



//P: two params, one an array that will contain either numbers or strings, and the second which will be a value either of string or number type
//R: return boolean value for whether or not the second value input is contained in the first input array, accounting for casing with strings
//E: [66,101], 66 => true
  // ['t','e','s','t'] 'e' => true
  // ['what', 'a', 'great', 'kata'] 'kat' => false
//P: just return a.includes(x) which returns a boolean value for if the element in the param is included in the array


const check = (a,x) => a.includes(x)