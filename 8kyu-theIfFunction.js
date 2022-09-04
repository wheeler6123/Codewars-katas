/*Create a function called _if which takes 3 arguments: a boolean value bool and 2 functions (which do not take any parameters): func1 and func2

When bool is truth-ish, func1 should be called, otherwise call the func2.

Example:
_if(true, function(){console.log("True")}, function(){console.log("false")})
// Logs 'True' to the console.*/


//P: three inputs, a boolean value and 2 anonymous functions
//R: if bool is true, call func1 if false call func2
//E: true => func1() called
  // false => func2() called
//P: use ternary to return func1 or func2 based on bool input 
  

const _if = (bool,func1,func2) => bool ? func1() : func2();