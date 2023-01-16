/* 
This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.

Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to print out an expression (like 28x^7). "^1" should not be truncated when exponent = 2.

For example:

derive(7, 8)
In this case, the function should multiply 7 and 8, and then subtract 1 from 8. It should output "56x^7", the first number 56 being the product of the two numbers, and the second number being the exponent minus 1.

derive(7, 8) --> this should output "56x^7" 
derive(5, 9) --> this should output "45x^8" 
Notes:

The output of this function should be a string
The exponent will never be 1, and neither number will ever be 0
*/



//P: two inputs, both integers, first being the coefficient and second being the exponent
//R: return a string, composed of the product of multiplying the two numbers together concatenated with x^n where n is the exponenent input minus 1
//E: 7,8 => '56x^7'
  // 5,9 => '45x^8'
//P: declare two vars, one to hold the product and one to hold the modified exponent, then return a template literal dropping the right numbers in


function derive(coefficient,exponent) {
    let product = coefficient * exponent
    let lessExp = exponent - 1
    
    return `${product}x^${lessExp}`
  }