/*
You must create a function, spread, that takes a function and a list of arguments to be applied to that function. You must make this function return the result of calling the given function/lambda with the given arguments.

eg:

spread(someFunction, [1, true, "Foo", "bar"] ) 
// is the same as...
someFunction(1, true, "Foo", "bar")
*/


//P: two inputs, first a function call, second an array containing the arguments to be called in the function
//R: return the result of the called function with the provided arguments
//P: spread the args array and call the function


function spread(func, args) {
    return func(...args)
  }