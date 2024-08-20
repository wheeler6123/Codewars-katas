// You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

// Your function will accept three arguments:
// The first and second argument should be numbers.
// The third argument should represent a sign indicating the operation to perform on these two numbers.

// if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

// Example:
// calculator(1,2,"+"); //=> result will be 3
// calculator(1,2,"&"); //=> result will be "unknown value"
// calculator(1,"k","*"); //=> result will be "unknown value"
// Good luck!

// P: program accepts three inputs, the first and second of which should be integers and the third which should be a math sign operator (+,-,*,/)
// R: if the inputs are valid, return the result of applying the input operator to the input numbers
//    if any input is not valid, return string 'unknown value'
// E: (1,2,'+') => 3
//    (1,2,'&') => 'unknown value'
//    (1,'k','*') => 'unknown value'
// P: validate the inputs, if any are invalid return 'unknown value'
//    if inputs validated, return the result of the math equation

const signs = ['+','-','*','/']
function calculator(a,b,sign){
  if(typeof a != 'number' || typeof b != 'number' || !signs.includes(sign) ) return 'unknown value';
  if(sign == '+'){
    return a + b;
  } else if (sign == '-'){
    return a - b;
  } else if (sign == '*'){
    return a * b;
  } else {
    return a / b;
  }
}